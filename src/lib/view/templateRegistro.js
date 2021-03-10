export const registro = () => {
  const divRegistro = document.createElement('div');
  const viewRegistro = ` 
    <div id="contendorBaseRegistro"class="containerBase">
      <img id="inputImgLogo" src="images/logo.png" class="img">
      <img id="botonGoogle" class="botonGoogle" src="images/initGoo.png" type="button">
      <input id="inputEmail" type="email" placeholder="Ingesa email">
      <input id="inputNombreUsuario" type="name" placeholder="Nombre de usuario">
      <input id="inputContraseña" type="password" placeholder="Contraseña" minlength="6" maxlength="8" required>
      <input id="inputCalendario" type="date">
      <button id= "btnRegister" class="btnRegister">Registrarme</button>
      <h2>Al registrate, aceptas nuestras condiciones, la Politica de datas y la Politica de cookies</h2>
    </div>
    `;

  divRegistro.innerHTML = viewRegistro;
  const wall = divRegistro.querySelector('#btnRegister');
  wall.addEventListener('click', () => {
  window.location.href = '#/bienvenida';
  });
  return divRegistro;
}