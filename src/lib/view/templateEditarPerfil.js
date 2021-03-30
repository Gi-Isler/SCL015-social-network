import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';

export const editarPerfil = () => {
  const divEditarPerfil = document.createElement('div');
  const viewEditarPerfil = ` 
    <div id="contendorBaseEditarPerfil" class="containerBaseEditarPerfil">
      <img id="logoPerfil" src="images/logo.png" class="logoPerfil">
      <h3>Edita tu perfil</h3>
      <div id="fotoImg">
        <input type="file" id="miFoto">
      </div>
      <div class="addimg">
        <input id="name" type="name" placeholder="Nombre de usuario"class="form">
        <input id="email" type="email" class="form" placeholder="Correo electronico">
        <button id= "btnRegister" class="btnRegister">Guardar Cambios</button>
      <div>
    </div>
    `;

  divEditarPerfil.innerHTML = viewEditarPerfil;

  observador();
  return divEditarPerfil;
};
