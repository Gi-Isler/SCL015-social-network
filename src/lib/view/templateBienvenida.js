import { registrarme } from '../index.js';
import { validar } from '../index.js';
//import { menuEditar } from '../index.js';
import { salir } from '../index.js';
import { observador } from '../index.js';


export const bienvenida = () => {
  const divBienvenida = document.createElement('div');
  const viewBienvenida = ` 
    <div id="containerBaseBienvenida" class="containerBaseBienvenida">
      <header class="header">
      <div class="configuration">
        <input type="checkbox" id="check">
        <label for="check" class="icon-menu">Menu</label>
        <nav class="menu">
          <lu>
          <li><a href='#/editarPerfil' class="editar">Editar perfil</a></li>
          <li><a href='#/recuperarContrasena' class="recuperar">Recuperar contraseña</a></li>
          <li><a id="cerrarSesion" class="cerrarSesion">Cerrar sesion</a></li>

          </lu>

        </nav>
      </div>
        <div class="logoNavContainer">
          <img src="images/Rectangle.png" id="logoWelcome" class="logoWelcome">
          <input placeholder="Buscar" id="search">
          <nav class="navigation">
            <ul>
              <li><a href="#"><img id="home" src="images/home.png" type="button"></a></li>
              <li><a href="#"><img id="group" src="images/account_group.png" type="button"></a></li>
              <li><a href="#"><img id="maps" src="images/google_maps.png" type="button"></a></li>
              <li><a href="#"><img id="msn" src="images/carta mensaje 1.png" type="button"></a></li>
            </ul>    
          </nav>        
        </div>
      </header>
    
   
      <div id="contenedorMsmMuro">
        <select typo="option"name="Selecciona tu Titulo" id="menuTitulo">
            <option>Elige tu opción</option>
            <option>Taller</option>
            <option>Actividad</option>
            <option>Tocata</option>
            <option>Curso</option>
            <option>Profesional</option>
            <option>Conversatorio</option>
      </select>
            <input type="text" id="mensaje"  placeholder="Publicar mensaje..." form-mothod = "post">
            <button id="agregar" class="agregar">Publicar</button>   
      </div> 
  </div>
  
    `;

  divBienvenida.innerHTML = viewBienvenida;

  /*const btnMenuEdi = divBienvenida.querySelector('#btnConf');
  btnMenuEdi.addEventListener('click', () => {
  menuEditar();
  });*/

  const cerrarSesion = divBienvenida.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
  salir();
  });

  const coleccion = divBienvenida.querySelector('#agregar')
  coleccion.addEventListener('click' , () => {
    agregarDatos()
  })
  const agregarDatos = () => {
      const db = firebase.firestore();
      const menuTitulo = document.getElementById('menuTitulo').value;
      const mensaje = document.getElementById('mensaje').value;
      //Agrgar documentos
      db.collection("mensajeMuro").add({
      Option: menuTitulo,
      Text: mensaje,
      })
      .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('menuTitulo').value = '';
      document.getElementById('mensaje').value = '';
      })
      .catch((error) => {
      console.error("Error adding document: ", error);
      });
    

  /*const imprimirPublicacion = mensaje;
  document.getElementById('mensajePublicado').innerHTML = imprimirPublicacion;*/
const contenedorMsmMuro = document.getElementById('contenedorMsmMuro');
 db.collection("mensajeMuro").get().then((querySnapshot) => {
  contenedorMsmMuro.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      contenedorMsmMuro.innerHTML += `

    <div class="box">
     <h1>${doc.data().Option}</h1>
     <h3>${doc.data().Text}</h3>
     
    </div>
      `
  });
});
}
// Otra funcion para traer los datos (post) de firestore
// Otra funcion para imprimir los datos (post) de firastore
// Otra funcion para filtrar y ordenar los datos de  firestore

  observador();
  return divBienvenida;
}
