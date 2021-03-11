import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';
export const bienvenida = () => {
  const divBienvenida = document.createElement('div');
  const viewBienvenida = ` 
    <div id="containerBaseLogin" class="containerBase">
      <nav>
        <div class="search">
          <img src="images/Rectangle.png" id="logoWelcome" class="logoWelcome">
          <input placeholder="Buscar">
            <ul>
              <li><a href="#"><img id="home" src="images/home.png" type="button"></a></li>
              <li><a href="#"><img id="group" src="images/account_group.png" type="button"></a></li>
              <li><a href="#"><img id="maps" src="images/google_maps.png" type="button"></a></li>
              <li><a href="#"><img id="msn" src="images/carta mensaje 1.png" type="button"></a></li>
            </ul>    
        </div>
      </nav> 
      <h1>Bienvenidos a nuestra APP </h1>
    </div>
    `;
 
  divBienvenida.innerHTML = viewBienvenida;


  return divBienvenida;
}