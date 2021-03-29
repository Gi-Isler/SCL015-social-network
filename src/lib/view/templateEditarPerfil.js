import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';

export const editarPerfil = () => {
  const divEditarPerfil = document.createElement('div');
  const viewEditarPerfil = ` 
    <div id="contendorBaseEditarPerfil" class="containerBaseEditarPerfil">
    <img id="logoPerfil" src="images/logo.png" class="logoPerfil">
      <h1>Edita tu perfil</h1>
      <div class="addimg">
      <label for="input-file">
          <img src="img/addimg.png" id=imgUsuario />
      </label>
      <input id="input-file" type="file"/>
    </div>
    <<input id="name" type="name" placeholder="Nombre de usuario"class="form">
    <input id="email" type="email" class="form" placeholder="Ingesa email">
    <button id= "btnRegister" class="btnRegister">Guardar Cambios</button><div>
    </div>
    `;

  divEditarPerfil.innerHTML = viewEditarPerfil;

  observador();
  return divEditarPerfil;
};
