export const bienvenida = () => {
    const divBienvenida = document.createElement('div');
    const viewBienvenida = ` 
    
     <h1>Bienvenidos a nuestra APP </h1>
    
    `;

  
divBienvenida.innerHTML = viewBienvenida;


return divBienvenida;
  }