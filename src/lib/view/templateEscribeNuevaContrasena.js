import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';
import { mostrarContrasenaLogin } from '../index.js';

export const escribeNuevaContrasena = () => {
  const divEscribeNuevaContrasena = document.createElement('div');
  const viewEscribeNuevaContrasena = ` 
    <div id="contendorBaseRegistro" class="containerBaseRegistro">
    <img id="logoPerfil" src="images/logo.png" class="logoPerfil">
      <h1>Escribe tu nueva contraseña </h1>
      <input type="password" id="passwordLogin1"class="inputlogin" name="Password" placeholder="Nueva Password"minlength="6" maxlength="8" required>
      <img id="eyeOpen1" class="eyeOpen" src="images/eyelashes.png" type="button">
      <input type="password" id="passwordLogin2"class="inputlogin" name="Password" placeholder="Repite Password"minlength="6" maxlength="8" required>
      <img id="eyeOpen2" class="eyeOpen" src="images/eyelashes.png" type="button">
      <button id= "btnRegister" class="btnRegister">Guardar Cambios</button>
      </div>
    
    `;

  divEscribeNuevaContrasena.innerHTML = viewEscribeNuevaContrasena;

  const abrirOjo1 = divEscribeNuevaContrasena.querySelector('#eyeOpen1');
  const passwordLogin1 = divEscribeNuevaContrasena.querySelector('#passwordLogin1');
  abrirOjo1.addEventListener('click', () => {
    mostrarContrasenaLogin(abrirOjo1, passwordLogin1);
  });
  
  const abrirOjo2 = divEscribeNuevaContrasena.querySelector('#eyeOpen2');
  const passwordLogin2 = divEscribeNuevaContrasena.querySelector('#passwordLogin2');
  abrirOjo2.addEventListener('click', () => {
    mostrarContrasenaLogin(abrirOjo2, passwordLogin2);
  });

  
  
  observador();
  return divEscribeNuevaContrasena;
};