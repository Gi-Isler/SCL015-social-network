// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { registro } from './lib/view/templateRegistro.js';
myFunction();
document.getElementById('root').innerHTML = login() 
document.getElementById('root').innerHTML = registro()

