// aqui exportaras las funciones que necesites
//import "firebase/auth";
//import "firebase/firestore";
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};


export const loginGoo = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('user' , user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.lo('error', errorMessage)
    // ...
  });
}