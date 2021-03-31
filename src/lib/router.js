import { login } from './view/templateLogin.js';
import { registro } from './view/templateRegistro.js';
import { recuperarContrasena } from './view/templateRecuperarContrasena.js';
// import { escribeNuevaContraseña } from './view/templateEscribeNuevaContraseña.js';
import { bienvenida } from './view/templateBienvenida.js';
import { editarPerfil } from './view/templateEditarPerfil.js';
import { escribeNuevaContrasena } from './view/templateEscribeNuevaContrasena.js';
import { post } from './view/templatePost.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '':
      containerRoot.appendChild(login());
      break;
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/login':
      containerRoot.appendChild(login());
      break;
    case '#/registro':
      containerRoot.appendChild(registro());
      break;
    case '#/bienvenida':
      containerRoot.appendChild(bienvenida());
      containerRoot.appendChild(post());
      break;
    case '#/recuperarContrasena':
      containerRoot.appendChild(recuperarContrasena());
      break;
    case '#/escribeNuevaContrasena':
      containerRoot.appendChild(escribeNuevaContrasena());
      break;
    case '#/editarPerfil':
      containerRoot.appendChild(editarPerfil());
      break;
    default:
      containerRoot.innerHTML = '<h1>Pagina no existe</h1>';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
      return showTemplate (hash)
  }   else if ( hash === '#/login'){
       return showTemplate (hash)
  } else if ( hash === '#/registro'){
    return showTemplate (hash)
  } else if ( hash === '#/bienvenida'){
    return showTemplate (hash)
  } else if ( hash === '#/recuperarContrasena'){
    return showTemplate (hash)
  } else if ( hash === '#/escribeNuevaContrasena'){
      return showTemplate (hash) 
  } else if ( hash === '#/editarPerfil'){
    return showTemplate (hash)  
  } else {
    return showTemplate (hash) 
  }
}