import { registrarme } from '../index.js';
import { validar } from '../index.js';
import { observador } from '../index.js';
export const bienvenida = () => {
  const divBienvenida = document.createElement('div');
  const viewBienvenida = ` 
    <div id="containerBaseBienvenida" class="containerBase">
      <header class="header">
        <div class="logoNavContainer">
          <img src="images/Rectangle.png" id="logoWelcome" class="logoWelcome">
          <input placeholder="Buscar" id="search">
          <nav class="navigation">
            <ul>
              <li><a href="#"><img id="home" src="images/home.png" type="button"></a></li>
              <li><a href="#"><img id="group" src="images/account_group.png" type="button"></a></li>
              <li><a href="#"><img id="maps" src="images/google_maps.png" type="button"></a></li>
              <li><a href="#"><img id="msn" src="images/carta mensaje 1.png" type="button"></a></li>
            </ul>    
          </nav>        
       </div>
      </header>

  

      <h1>Bienvenidos a nuestra APP </h1>
    </div>
    `;
 
  divBienvenida.innerHTML = viewBienvenida;


  return divBienvenida;
}