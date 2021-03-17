import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';

export const recuperarContrasena = () => {
  const divRecuperarContrasena = document.createElement('div');
  const viewRecuperarContrasena = ` 
    

      <h1>Recupera Contraseña </h1>
    
    `

    divRecuperarContrasena.innerHTML = viewRecuperarContrasena;

    observador()
    return divRecuperarContrasena;
};
   