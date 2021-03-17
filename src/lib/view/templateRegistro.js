import { loginGoo } from '../index.js';
import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { mostrarContrasenaRegistro } from '../index.js'
import { observador } from '../index.js';
export const registro = () => {
  const divRegistro = document.createElement('div');
  const viewRegistro = ` 
    <div id="contendorBaseRegistro" class="containerBase">
      <img id="inputImgLogo" src="images/logo.png" class="img">
      <img id="botonGoogle" class="botonGoogle" src="images/initGoo.png" type="button">
      <input id="email" type="email" class="form" placeholder="Ingesa email">
      <input id="name" type="name" placeholder="Nombre de usuario"class="form">
      <input id="inputCalendario" type="date"class="form">
      <input id="contrasena" type="password" class="form" placeholder="Contraseña" minlength="6" maxlength="8" required>
      <img id="eyeOpen" class="eyeOpen" src="images/eyelashes.png" type="button">
      <button id= "btnRegister" class="btnRegister">Registrarme</button><div id="contendorBaseRegistro" class="containerBase">
    
    <h2>Al registrate, aceptas nuestras condiciones, la Politica de datas y la Politca de cookies</h2>
    </div>
    `;

  divRegistro.innerHTML = viewRegistro;
  
  const btnGoogle = divRegistro.querySelector('#botonGoogle');
  btnGoogle.addEventListener('click', () => {
   loginGoo() 
  })
  const abrirOjoRegistro = divRegistro.querySelector('#eyeOpen');
  abrirOjoRegistro.addEventListener('click', () => {
    mostrarContrasenaRegistro()
  })
  const loginRegistro = divRegistro.querySelector('#btnRegister');
  loginRegistro.addEventListener('click', () => {
    registrarme(), validar()
  
  })
  // observador()

  return divRegistro;
}
  