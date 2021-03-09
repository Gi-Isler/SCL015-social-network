import { loginGoo } from '../index.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` 
    <div id="containerBaseLogin">
      <img id="inputImgLogo" src="images/logo.png" class="img">
      <input type="nombreUsuario" id="nombreUsuario" class="inputlogin" name="usuario" placeholder="Nombre Usuario"/>
      <input type="password" id="password"class="inputlogin" name="Password" placeholder="Password"minlength="6" maxlength="8" required>
      <button id="btnEnter" class="btnEnter">Entrar</button>
      <button id="recoverPassword" class="recoverPassword">Recuperar mi contraseña</button>
      <h3>Ingresa con tus redes</h3>
      <img id="botonGoogle" class="botonGoogle" src="images/initGoo.png" type="button">
      <button id="btnCheckIn" class="btnCheckIn">Registrarme</button>  
    </div>
    `;
  divLogin.innerHTML = viewLogin;
  const btnGoogle = divLogin.querySelector('#botonGoogle');
 btnGoogle.addEventListener('click', () => {
  loginGoo()
 })
  const restroForm = divLogin.querySelector('#btnCheckIn');
  restroForm.addEventListener('click', () => {
    window.location.href = '#/registro';
  })

  return divLogin;
};
