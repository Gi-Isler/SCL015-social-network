// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { registro } from './lib/view/templateRegistro.js';
import { bienvenida } from './lib/view/templateBienvenida.js';
import { post } from './lib/view/templatePost.js'
import { editarPerfil } from './lib/view/templateEditarPerfil.js';
import { recuperarContrasena } from './lib/view/templateRecuperarContrasena.js';
import { changeRoute } from './lib/router.js';

// document.getElementById('root').innerHTML = registro()
// document.getElementById('root').innerHTML = bienvenida()

const init = () => {
  document.getElementById('root').appendChild(login());
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);