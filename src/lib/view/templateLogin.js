export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` 
  <div id="conteinerLogin">  
  <div id="containerBaseLogin">
    <input id="inputImgLogo" type="image" src="images/logo.png" class="img">
    <input type="nombreUsuario" id="nombreUsuario" name="usuario" placeholder="Nombre Usuario"/>
    <input type="password" id="password" name="Password" placeholder="Password"minlength="6" maxlength="8" required>
    <button id="btnEnter" class="btnEnter">Entrar</button>
    <button id="recoverPassword" class="recoverPassword">Recuperar mi contraseña</button>
    <h3>Ingresa con tus redes</h3>
    <input id="inputImgGoogle" type="image" src="images/initGoo.png" class="boton">
    <button id="btnCheckIn" class="btnCheckIn">Registrarme</button>  
    </div>
    </div> 
    `;
  divLogin.innerHTML = viewLogin;
  const restroForm = divLogin.querySelector('#btnCheckIn');
  restroForm.addEventListener('click', () => {
    window.location.href = '#/registro';
  })

  return divLogin;
};
