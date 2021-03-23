import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { salir } from '../index.js';
import { observador } from '../index.js';
import { agregarDatos } from '../index.js';

export const bienvenida = () => {
  const divBienvenida = document.createElement('div');
  const viewBienvenida = ` 
    <div id="containerBaseBienvenida" class="containerBaseBienvenida">
      <header class="header">
        <div class="configuration">
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn"> 
        <i class="fas fa-bars">
        </i></label>
        <div class="closed">
          <ul>
            <li><a href="#/editarPerfil">Editar Perfil</a></li>
            <li><a id="cerrarSesion" class="cerrarSesion">Cerrar Sesion</a></li>
        </div>
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
      <div>
      <input id="name" type="name" placeholder="Nombre de usuario"class="form">
      <input type="text" id="mensaje"  placeholder="Publicar mensaje...">
      <button id="agregar" class="agregar">Publicar</button>
      </div>  
      <div>
  

      <h1>Bienvenidos a nuestra APP </h1>
    </div>
    `;

  divBienvenida.innerHTML = viewBienvenida;

  const cerrarSesion = divBienvenida.querySelector('#cerrarSesion');
  cerrarSesion.addEventListener('click', () => {
    salir();
  });

  const coleccion = divBienvenida.querySelector('#agregar')
  coleccion.addEventListener('click' , () => {
    agregarDatos()
  })

  observador();
  return divBienvenida;
}