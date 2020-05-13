import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase';
import useModal from '../Modal/useModal';
import Modal from '../Modal';
import useNotifications from '../Notifications/useNotifications';
import Notifications from '../Notifications/Notifications';
import Header from '../Header';
import View from '../UnderConstruction';
import SignUpLogin from '../Form/SignUpLogin';

const Container = () => {
  const [
    notificationMessage,
    setNotificationMessage,
    showNotification,
  ] = useNotifications(5000);
  const [showModal, setShowModal] = useModal();
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const isFirstRun = useRef(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setDisplayName(user.displayName);
        // setEmail(user.email);
        setPhotoURL(user.photoURL);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (loggedIn) {
      setNotificationMessage(`Welcome ${displayName}`);
    } else {
      setNotificationMessage(`Bye ${displayName}`);
    }
  }, [loggedIn]);

  return (
    <>
      <Header
        setShowModal={setShowModal}
        loggedIn={loggedIn}
        displayName={displayName}
        photoURL={photoURL}
        setNotificationMessage={setNotificationMessage}
      />
      {showNotification && (
        <Notifications>
          <span>{notificationMessage}</span>
        </Notifications>
      )}
      {showModal && (
        <Modal>
          <SignUpLogin
            setNotificationMessage={setNotificationMessage}
            handleClose={() => setShowModal(false)}
          />
        </Modal>
      )}
      <View />
    </>
  );
};

export default Container;
