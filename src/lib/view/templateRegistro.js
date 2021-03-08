export const registro = () => {
    const divRegistro = document.createElement('div');
    const viewRegistro = ` 
    
    <div id="contendorBaseRegistro">
    <input id="inputImgLogo" type="image" src="images/logo.png" class="img">
    <input id="inputImgGoogle" type="image" src="images/initGoo.png" class="boton">

    <input id="inputEmail" type="email" placeholder="Ingesa email">
    <input id="inputNombreUsuario" type="name" placeholder="Nombre de usuario">
    <input id="inputContraseña" type="password" placeholder="Contraseña">
    <input id="inputCalendario" type="date">
    <button>Registrarme</button>
    <h2>Al registrate, aceptas nuestras condiciones, la Politica de datas y la Politca de cookies</h2>
    </div>
    `;

  
  return viewRegistro;
  }

  