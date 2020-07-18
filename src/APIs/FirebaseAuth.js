class FirebaseAuth {
  constructor(auth, facebook, google, twitter) {
    this.auth = auth;
    this.facebook = facebook;
    this.google = google;
    this.twitter = twitter;
  }

  authEmailPass(email, password, setNotificationMessage) {
    this.auth.signInWithEmailAndPassword(email, password).then(result => {
      if (result.user.emailVerified) {
        // console.log('Welcome');
      } else {
        this.auth.signOut();
        // console.error('Not Verified');
        setNotificationMessage('Email not verified, please check your email');
      }
    });
  }

  authFacebook(setNotificationMessage, handleClose) {
    this.auth
      .signInWithPopup(this.facebook)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Facebook auth ${error}`);
        handleClose();
      });
  }

  authGoogle(setNotificationMessage, handleClose) {
    this.auth
      .signInWithPopup(this.google)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Google auth ${error}`);
        handleClose();
      });
  }

  authTwitter(setNotificationMessage, handleClose) {
    this.auth
      .signInWithPopup(this.twitter)
      .then(result => {
        setNotificationMessage(`Welcome ${result.user.displayName}`);
        handleClose();
      })
      .catch(error => {
        setNotificationMessage(`Error during Twitter auth ${error}`);
        handleClose();
      });
  }

  crearCuentaEmailPass(displayName, email, password, setNotificationMessage) {
    this.auth
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

        this.auth.signOut();

        // console.log('You are in!');
        setNotificationMessage('Account Created! Check your email and Login');
      })
      .catch(error => {
        // console.error(error);
        setNotificationMessage(`Error creating account ${error}`);
      });
  }

  logOut(setNotificationMessage) {
    this.auth
      .signOut()
      .then(() => {
        // setLoggedIn(false);
      })
      .catch(error => setNotificationMessage(`Error login out ${error}`));
  }
}

export default FirebaseAuth;
