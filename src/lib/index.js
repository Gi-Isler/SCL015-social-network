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
    if (user.user.emailVerified === true){
   
      window.location.href = '#/bienvenida';
    }else {
      alert('Aun no confirmas el link en tu correo');
    }
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //console.log(errorCode);
    //console.log(errorMessage);
    console.log('No existe usuario');
    alert('Verifica tus datos')
  });
};

export const mostrarContrasenaLogin = () => {
  const eyeOpen = document.querySelector('#eyeOpen');
  const passwordLogin = document.querySelector('#passwordLogin');
  
  if(passwordLogin.type == "password"){
      passwordLogin.type ="text";
      eyeOpen.src = "images/eyes.png";
  }else {
    passwordLogin.type ="password";
    eyeOpen.src = "images/eyelashes.png";
  }
};

export const registrarme = () => {
  const email = document.querySelector('#email').value;    
  //const name = document.querySelector('#name').value;
  const contrasena = document.querySelector('#contrasena').value;
  console.log('Hola soy la funcion de registrarme')
  
  //Muestra de codigo de firebase:
  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .then((user) => {
   window.location.href = '#/login';
   console.log(user)
   var usuario = firebase.auth().currentUser;
   usuario.sendEmailVerification()
    .then(function() {
    // Email sent.
      alert('Te hemos enviado un correo. Validalo')
      console.log('Enviando correo...');

    }).catch(function(pepita) {
    // An error happened.
      console.log('estamos dentro de la catch')
      console.log(pepita);
    
      });
  })
  .catch((papita) => {
    var errorCode = papita.code;
    var errorMessage = papita.message;
    // ..  
    if(errorCode === 'auth/email-already-in-use'){
      console.log('ya esta en uso')
      alert('Este usuario ya existe')
      window.location.href = '#/login';
    }
    
  });
};
export const mostrarContrasenaRegistro = () => {
  const eyeOpen = document.querySelector('#eyeOpenRegister');
  const contrasena = document.querySelector('#contrasena');
  
  if(contrasena.type == "password"){
      contrasena.type ="text";
      eyeOpen.src = "images/eyes.png";
  }else {
    contrasena.type ="password";
    eyeOpen.src = "images/eyelashes.png";
  }
};

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
};
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
      console.log(email)
      
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
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
};
export const validar = () => {

//Muestra de codigo de firebase:
/*var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  alert('Te hemos enviado un correo. Validalo')
  console.log('Enviando correo...');
}).catch(function(error) {
  // An error happened.
  console.log('error');
});'*/
};

export const salir = () => {
  firebase.auth().signOut()
  .then(function(){
    // console.log('Saliendo...')
   alert("has cerrado sesion")
   window.location.href='#/login'; 
  })
  .catch(function(error){
    //  console.log(error)
    alert("Aun no has cerrado sesion")
  })
};
export const agregarDatos = () => {
  var db = firebase.firestore();
  let name = document.getElementById('name').value;
  let mensaje = document.getElementById('mensaje').value;
  //Agrgar documentos
   db.collection("mensajeMuro").add({
   first: name,
   Text: mensaje,
   
   })
   .then((docRef) => {
   console.log("Document written with ID: ", docRef.id);
   let name = document.getElementById('name').value = '';
   let mensaje = document.getElementById('mensaje').value = '';

   })
   .catch((error) => {
   console.error("Error adding document: ", error);
   });
}
