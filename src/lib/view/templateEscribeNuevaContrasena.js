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
      <input type="password" id="passwordLogin"class="inputlogin" name="Password" placeholder="Nueva Password"minlength="6" maxlength="8" required>
      <img id="eyeOpen" class="eyeOpen" src="images/eyelashes.png" type="button">
      <input type="password" id="passwordLogin"class="inputlogin" name="Password" placeholder="Repite Password"minlength="6" maxlength="8" required>
      <img id="eyeOpen" class="eyeOpen" src="images/eyelashes.png" type="button">
      <button id= "btnRegister" class="btnRegister">Guardar Cambios</button>
      </div>
    
    `;

  divEscribeNuevaContrasena.innerHTML = viewEscribeNuevaContrasena;

  const abrirOjo = divEscribeNuevaContrasena.querySelector('#eyeOpen');
  abrirOjo.addEventListener('click', () => {
    mostrarContrasenaLogin();
  });
  
  observador();
  return divEscribeNuevaContrasena;
};