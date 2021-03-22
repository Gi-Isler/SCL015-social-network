import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';

export const recuperarContrasena = () => {
  const divRecuperarContrasena = document.createElement('div');
  const viewRecuperarContrasena = ` 
    <div id="contendorBaseRegistro" class="containerBaseRegistro">

      <h1>Recupera Contraseña </h1>
    </div>
    `;

  divRecuperarContrasena.innerHTML = viewRecuperarContrasena;

  observador();
  return divRecuperarContrasena;
};