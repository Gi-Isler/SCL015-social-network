export const login = () => {
    const divLogin = document.createElement('div');
    const viewLogin = ` 
    <img id=logo>
    <input type="nombreUsuario" id="nombreUsuario" name="usuario" placeholder="Nombre Usuario"/>
    <input type="password" id="password" name="Password" placeholder="Password"/>
    <button id="btnLogin" class="loginGoogle">Inicia sesion con Google</button>
    `;
  
  return viewLogin;
  }