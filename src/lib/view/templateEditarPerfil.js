import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';

export const editarPerfil = () => {
  const divEditarPerfil = document.createElement('div');
  const viewEditarPerfil = ` 
    <div id="contendorBaseEditarPerfil" class="containerBaseEditarPerfil">

      <h1>Edita tu perfil</h1>
    </div>
    `;

  divEditarPerfil.innerHTML = viewEditarPerfil;

  observador();
  return divEditarPerfil;
};