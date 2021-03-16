import { login } from '../lib/view/templateLogin.js';
import { registro } from '../lib/view/templateRegistro.js';
//import { recuperarContraseña } from '../lib/view/templateRecuperarContraseña.js';
//import { escribeNuevaContraseña } from '../lib/view/templateEscribeNuevaContraseña.js';
import { bienvenida } from '../lib/view/templateBienvenida.js';
//import { editarPerfil } from '../lib/view/templateEditarPerfil.js';


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
      break;
    default:
      containerRoot.innerHTML =`<h1>Pagina no existe</h1>`
      
  }
}


export const changeRoute = (hash) => {
  if (hash === '#/'){
    return showTemplate (hash)
  } else if ( hash === '#/login'){
    return showTemplate (hash)
  } else if ( hash === '#/registro'){
    return showTemplate (hash)
  } else if ( hash === '#/bienvenida'){
    return showTemplate (hash)
  } 
  else {
    return showTemplate (hash) 
  }
}