export const registro = () => {
    const divRegistro = document.createElement('div');
    const viewRegistro = ` 
    <div id="conteinerWall">
    <div id="contendorBaseRegistro">
    <input id="inputImgLogo" type="image" src="images/logo.png" class="img">
    <input id="inputImgGoogle" type="image" src="images/initGoo.png" class="boton">

    <input id="inputEmail" type="email" placeholder="Ingesa email">
    <input id="inputNombreUsuario" type="name" placeholder="Nombre de usuario">
    <input id="inputContraseña" type="password" placeholder="Contraseña" minlength="6" maxlength="8" required>
    <input id="inputCalendario" type="date">
    <button id= "btnRegister" class="btnRegister">Registrarme</button>
    <h2>Al registrate, aceptas nuestras condiciones, la Politica de datas y la Politca de cookies</h2>
    </div>
    </div>
    `;

  divRegistro.innerHTML = viewRegistro;
  const wall = divRegistro.querySelector('#btnRegister');
  wall.addEventListener('click', () => {
  window.location.href = '#/bienvenida';
  })
  return divRegistro;
  }
  
  