import { loginGoo } from '../index.js';
import { registrarme } from '../index.js';
//import { observador } from '../index.js';
export const registro = () => {
    const divRegistro = document.createElement('div');
    const viewRegistro = ` 
    <div id="conteinerWall">
    <div id="contendorBaseRegistro">
    <input id="inputImgLogo" type="image" src="images/logo.png" class="img">
    <img id="botonGoogle" class="botonGoogle" src="images/initGoo.png" type="button">

    <input id="email" type="email" class="email" placeholder="Ingesa email">
    <input id="name" type="name" placeholder="Nombre de usuario">
    <input id="inputCalendario" type="date">
    <input id="contrasena" type="password" class="contrasena" placeholder="Contraseña" minlength="6" maxlength="8" required>
    <button id= "btnRegister" class="btnRegister">Registrarme</button>
    
    <h2>Al registrate, aceptas nuestras condiciones, la Politica de datas y la Politca de cookies</h2>
    </div>
    </div>
    `;

  divRegistro.innerHTML = viewRegistro;
  
 

  const btnGoogle = divRegistro.querySelector('#botonGoogle');
  btnGoogle.addEventListener('click', () => {
  loginGoo()
 })

  const loginRegistro = divRegistro.querySelector('#btnRegister');
  loginRegistro.addEventListener('click', () => {
  registrarme()
  
 })
 //observador()


  return divRegistro;
  }


  