import firebase from 'firebase';

class Autentication {
  constructor() {
    this.email = '';
  }

  authEmailPass(email, password) {
    if (!this.email) this.email = email;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerified) {
          // console.log('Welcome');
        } else {
          firebase.auth().signOut();
          // console.error('Not Verified');
        }
      });
  }

  crearCuentaEmailPass(displayName, email, password) {
    if (!this.email) this.email = email;
    this.email = email;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName,
          })
          .catch(() => {
            // console.error(error);
          });

        const setup = {
          url: 'https://localhost:3000/',
        };

        result.user.sendEmailVerification(setup).catch(() => {
          // console.error(error);
        });

        firebase.auth().signOut();

        // console.log('You are in!');
      })
      .catch(() => {
        // console.error(error);
      });
  }
}

export default Autentication;
