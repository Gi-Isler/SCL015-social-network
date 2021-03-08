export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` 
    <div id="containerLogo">
      <img src="images/logo.png" id="logo">
    </div>
    <div id="login" class="login">
      <input type="nombreUsuario" id="nombreUsuario" name="usuario" placeholder="Nombre Usuario"/>
      <input type="password" id="password" name="Password" placeholder="Password"/>
      <button id="btnEnter" class="btnEnter">Entrar</button>
      <button id="recoverPassword" class="recoverPassword">Recuperar mi contraseña</button>
    </div>  
    <div id="loginNetwork" class="loginNetwork">
      <h3>Ingresa con tus redes</h3>
      <button id="loginGoogle" class="loginGoogle"></button>
      <button id="btnCheckIn" class="btnCheckIn">Registrarme</button>
    </div>  
    `;
  divLogin.innerHTML = viewLogin;
  const restroForm = divLogin.querySelector('#btnCheckIn');
  restroForm.addEventListener('click', () => {
    window.location.href = '#/registro';
  })

  return divLogin;
};
