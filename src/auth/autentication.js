/* global firebase */
class Autentication {
  crearCuentaEmailPass(email, password, nombres) {
    this.email = email;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName: nombres,
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

        firebase.auth().singOut();

        // console.log('You are in!');
      })
      .catch(() => {
        // console.error(error);
      });
  }
}

export default Autentication;
