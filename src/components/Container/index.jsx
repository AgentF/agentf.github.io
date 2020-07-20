import React, { useState, useRef, useLayoutEffect } from 'react';
import firebase from 'firebase';
import FirebaseAuth from '../../APIs/FirebaseAuth';
import FirebaseStorage from '../../APIs/FirebaseStorage';
import { useScrollCheck } from '../../hooks/useScrollCheck';
import useNotifications from '../Notifications/useNotifications';
import useModal from '../Modal/useModal';
import Notifications from '../Notifications/Notifications';
import Modal from '../Modal';
import Header from '../Header';
import SignUpLogin from '../Forms/SignUpLogin';
import { Posts } from '../../containers/Posts';
import { AgentF } from './styles';

// post => {
//   cloudFirestoreDB.current.addDocToCollection('posts', {
//     author_uid: userID,
//     ...post,
//     date: firebase.firestore.FieldValue.serverTimestamp(),
//   });
// }

const Container = () => {
  const [
    notificationMessage,
    setNotificationMessage,
    showNotification,
  ] = useNotifications(5000);

  const scrolledPast = useScrollCheck();
  const [showSingInModal, setShowSingInModal] = useModal();
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [userID, setUserID] = useState('');

  const isFirstRun = useRef(true);
  const firebaseStorage = useRef(null);
  const firebaseAuth = useRef(null);

  useLayoutEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;

      /* Auth */
      const facebook = new firebase.auth.FacebookAuthProvider();
      const google = new firebase.auth.GoogleAuthProvider();
      const twitter = new firebase.auth.TwitterAuthProvider();
      firebaseAuth.current = new FirebaseAuth(
        firebase.auth(),
        facebook,
        google,
        twitter,
      );

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setDisplayName(user.displayName);
          setUserID(user.uid);
          setPhotoURL(user.photoURL);
          setLoggedIn(true);
        } else {
          setUserID(null);
          setPhotoURL(null);
          setLoggedIn(false);
        }
      });
      /* Auth */

      /* Storage */
      firebaseStorage.current = new FirebaseStorage(firebase.storage());
      /* Storage */

      /* Messaging */
      // const messaging = firebase.messaging();

      // messaging.usePublicVapidKey(
      //   process.env.REACT_APP_FIREBASE_CLOUDMESSAGIINGCERTIFICATE,
      // );

      // messaging
      //   .requestPermission()
      //   .then(() => {
      //     console.log('permiso otorgado');
      //     return messaging.getToken();
      //   })
      //   .then(token => {
      //     const db = firebase.firestore();
      //     db.collection('tokens')
      //       .doc(token)
      //       .set({
      //         token,
      //       })
      //       .catch(error => {
      //         console.error(`Error al insertar el token en la BD => ${error}`);
      //       });
      //   });

      // messaging.onTokenRefresh(() => {
      //   messaging.getToken().then(token => {
      //     console.log('token se ha renovado');
      //     const db = firebase.firestore();
      //     db.settings({ timestampsInSnapshots: true });
      //     db.collection('tokens')
      //       .doc(token)
      //       .set({
      //         token,
      //       })
      //       .catch(error => {
      //         console.error(`Error al insertar el token en la BD => ${error}`);
      //       });
      //   });
      // });

      // messaging.onMessage(payload => {
      //   console.log('mensaje en foreground');
      //   setNotificationMessage(`Nuevo Post! ${payload.data.titulo}`);
      // });
      /* Messaging */

      return;
    }
    if (loggedIn) {
      setNotificationMessage(`Welcome ${displayName}`);
    } else {
      setNotificationMessage(`Bye ${displayName}`);
      setDisplayName(null);
    }
  }, [loggedIn]);

  return (
    <AgentF>
      <Header
        setShowSingInModal={setShowSingInModal}
        loggedIn={loggedIn}
        displayName={displayName}
        photoURL={photoURL}
        handleLogOut={() => firebaseAuth.current.logOut(setNotificationMessage)}
        scrolledPast={scrolledPast}
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
      <Posts loggedIn={loggedIn} userID={userID} />
    </AgentF>
  );
};

export default Container;
