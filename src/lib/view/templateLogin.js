import { loginGoo } from '../index.js';
import { loginExistente } from '../index.js';
import { observador } from '../index.js';
import { mostrarContrasenaLogin } from '../index.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` 
    <div id="containerBaseLogin" class="containerBase">
      <img id="ImgLogo" src="images/logo.png" class="img">
      <input type="email" id="emailLogin" class="inputlogin" name="usuario" placeholder="Correo Electronico"/>
      <input type="password" id="passwordLogin"class="inputlogin" name="Password" placeholder="Password"minlength="6" maxlength="8" required>

     
      <img id="eyeOpen" class="eyeOpen" src="images/eyelashes.png" type="button">

      <button id="btnEnter" class="btnEnter">Entrar</button>
      <button id="recoverPassword" class="recoverPassword">Recuperar mi contraseña</button>
      <h3>Ingresa con tus redes</h3>
      <img id="botonGoogle" class="botonGoogle" src="images/initGoo.png" type="button">
      <button id="btnCheckIn" class="btnCheckIn">Registrarme</button>  
    </div>
    `;
  divLogin.innerHTML = viewLogin;

 const abrirOjo = divLogin.querySelector('#eyeOpen');
  abrirOjo.addEventListener('click', () => {
    mostrarContrasenaLogin()
  })

  const userApp = divLogin.querySelector('#btnEnter');
  userApp.addEventListener('click', () => {
    loginExistente()
  })

  const btnGoogle = divLogin.querySelector('#botonGoogle');
  btnGoogle.addEventListener('click', () => {
    loginGoo()
  })
  const restroForm = divLogin.querySelector('#btnCheckIn');
  restroForm.addEventListener('click', () => {
    window.location.href = '#/registro';
  })

  observador()
  return divLogin;
};

