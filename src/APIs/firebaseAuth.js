import firebase from 'firebase';

class firebaseAuth {
  static authEmailPass(email, password, setNotificationMessage) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerified) {
          // console.log('Welcome');
        } else {
          firebase.auth().signOut();
          // console.error('Not Verified');
          setNotificationMessage('Email not verified, please check your email');
        }
      });
  }

  static authFacebook(setNotificationMessage, handleClose) {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Facebook auth ${error}`);
        handleClose();
      });
  }

  static authGoogle(setNotificationMessage, handleClose) {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Google auth ${error}`);
        handleClose();
      });
  }

  static authTwitter(setNotificationMessage, handleClose) {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Twitter auth ${error}`);
        handleClose();
      });
  }

  static crearCuentaEmailPass(
    displayName,
    email,
    password,
    setNotificationMessage,
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName,
          })
          .catch(error => {
            // console.error(error);
            setNotificationMessage(`Error creating account ${error}`);
          });

        const setup = {
          url: 'https://agentf.github.io/',
        };

        result.user.sendEmailVerification(setup).catch(error => {
          // console.error(error);
          setNotificationMessage(`Error sending email verification ${error}`);
        });

        firebase.auth().signOut();

        // console.log('You are in!');
        setNotificationMessage('Account Created! Check your email and Login');
      })
      .catch(error => {
        // console.error(error);
        setNotificationMessage(`Error creating account ${error}`);
      });
  }

  static logOut(setNotificationMessage) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // setLoggedIn(false);
      })
      .catch(error => setNotificationMessage(`Error login out ${error}`));
  }
}

export default firebaseAuth;
