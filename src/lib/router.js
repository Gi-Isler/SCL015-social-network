import { login } from './view/templateLogin.js';
import { registro } from './view/templateRegistro.js';
import { recuperarContraseña } from './view/templateRecuperarContraseña.js';
import { escribeNuevaContraseña } from './view/templateEscribeNuevaContraseña.js';
import { bienvenida } from './view/templateBienvenida.js';
import { editarPerfil } from './view/templateEditarPerfil.js';

export const changeRoute = (hash) => {
    if (hash === '#/'){
        return showTemplate (hash)
    } else if ( hash === '#/registro'){
        return showTemplate (hash)
    } else {
        return showTemplate (hash) 
    }
}
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = bienvenida();

  switch (hash) {
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/registro':
      containerRoot.appendChild(registro());
      break;
    default
      containerRoot.innerHTML =`<h3>Pagina no existe</h3>`
  }
}
