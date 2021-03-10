// aqui exportaras las funciones que necesites
//import "firebase/auth";
//import "firebase/firestore";
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const loginExistente = () => {
  const emailLogin = document.querySelector('#emailLogin').value;    
  //const name = document.querySelector('#name').value;
  const passwordLogin = document.querySelector('#passwordLogin').value;
  //Muestra de codigo de firebase:
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then((user) => {
    // Signed in
    // ...
    window.location.href = '#/bienvenida';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //console.log(errorCode);
    //console.log(errorMessage);
    console.log('No existe usuario');
    alert('Verifica tus datos')
  });
}


export const registrarme = () => {
  const email = document.querySelector('#email').value;    
  //const name = document.querySelector('#name').value;
  const contrasena = document.querySelector('#contrasena').value;

  //Muestra de codigo de firebase:
  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .then((user) => {
    // Signed in
    // ...
    window.location.href = '#/bienvenida';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(email);
    console.log(contrasena);
  });
  

}

export const loginGoo = () => {
  //Muestra de codigo de firebase:
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    window.location.href = '#/bienvenida';
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
    
    // ...
  });
}
//observador que autentica la info codigo de firebase
export const observador = () => {
//Muestra de codigo de firebase:
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo')
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      // ...
    } else {
      
      // User is signed out
      // ...
    }
  });
}