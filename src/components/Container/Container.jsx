import React, { useState, useRef, useLayoutEffect } from 'react';
import firebase from 'firebase';
import FirebaseAuth from '../../APIs/FirebaseAuth';
import CloudFirestoreDB from '../../APIs/CloudFirestoreDB';
import { guidGenerator } from '../../helpers/functions';
import useNotifications from '../Notifications/useNotifications';
import useModal from '../Modal/useModal';
import Notifications from '../Notifications/Notifications';
import Modal from '../Modal';
import Header from '../Header/Header';
import SignUpLogin from '../Form/SignUpLogin';
import Posts from '../Posts';
import NewPost from '../Form/NewPost';
import './Container.css';

const Container = () => {
  const [
    notificationMessage,
    setNotificationMessage,
    showNotification,
  ] = useNotifications(5000);
  const [showSingInModal, setShowSingInModal] = useModal();
  const [showNewPostModal, setShowNewPostModal] = useModal();
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [posts, setPosts] = useState(null);
  const [userID, setUserID] = useState('');

  const isFirstRun = useRef(true);
  const cloudFirestoreDB = useRef(null);
  const firebaseAuth = useRef(null);

  useLayoutEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      const facebook = new firebase.auth.FacebookAuthProvider();
      const google = new firebase.auth.GoogleAuthProvider();
      const twitter = new firebase.auth.TwitterAuthProvider();
      firebaseAuth.current = new FirebaseAuth(
        firebase.auth(),
        facebook,
        google,
        twitter,
      );
      cloudFirestoreDB.current = new CloudFirestoreDB(firebase.firestore());
      cloudFirestoreDB.current.getCollection('posts', postsArray => {
        setPosts(postsArray);
      });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setDisplayName(user.displayName);
          setUserID(user.uid);
          setPhotoURL(user.photoURL);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
      return;
    }
    if (loggedIn) {
      setNotificationMessage(`Welcome ${displayName}`);
    } else {
      setNotificationMessage(`Bye ${displayName}`);
    }
  }, [loggedIn]);

  return (
    <div className="container">
      <Header
        setShowSingInModal={setShowSingInModal}
        loggedIn={loggedIn}
        displayName={displayName}
        photoURL={photoURL}
        handleLogOut={() => firebaseAuth.current.logOut(setNotificationMessage)}
      />
      {showNotification && (
        <Notifications>
          <span>{notificationMessage}</span>
        </Notifications>
      )}
      {showSingInModal && (
        <Modal>
          <SignUpLogin
            setNotificationMessage={setNotificationMessage}
            handleClose={() => setShowSingInModal(false)}
            handleLogIn={loginInfo => {
              firebaseAuth.current.authEmailPass(
                ...loginInfo,
                setNotificationMessage,
              );
            }}
            handleSingUp={singupInfo => {
              firebaseAuth.current.crearCuentaEmailPass(
                ...singupInfo,
                setNotificationMessage,
              );
            }}
            handleFacebookAuth={() => {
              firebaseAuth.current.authFacebook(setNotificationMessage, () =>
                setShowSingInModal(false),
              );
            }}
            handleGoogleAuth={() => {
              firebaseAuth.current.authGoogle(setNotificationMessage, () =>
                setShowSingInModal(false),
              );
            }}
            handleTwitterAuth={() => {
              firebaseAuth.current.authTwitter(setNotificationMessage, () =>
                setShowSingInModal(false),
              );
            }}
          />
        </Modal>
      )}
      {showNewPostModal && (
        <Modal>
          <NewPost
            setNotificationMessage={setNotificationMessage}
            handleClose={() => setShowNewPostModal(false)}
            handleSend={post => {
              cloudFirestoreDB.current.addDocToCollection(
                'posts',
                guidGenerator(),
                {
                  author_uid: userID,
                  ...post,
                  date: firebase.firestore.FieldValue.serverTimestamp(),
                },
              );
            }}
          />
        </Modal>
      )}
      {posts && <Posts posts={posts} />}
      {loggedIn && (
        <button
          className="add-post-button"
          type="button"
          onClick={() => setShowNewPostModal(true)}
        >
          <span className="material-icons">note_add</span>
        </button>
      )}
    </div>
  );
};

export default Container;
