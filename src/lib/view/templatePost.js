
export const post = () => {
    const db = firebase.firestore();
    

const contenedorMsmMuro = document.getElementById('postMuro');
    db.collection("mensajeMuro").onSnapshot((querySnapshot) => {
  contenedorMsmMuro.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

            contenedorMsmMuro.innerHTML += `
                <div id="boxMuro" class="boxMuro"> 
                    <h5 id="id">${doc.id}</h5>
                    <h1>${doc.data().Option}</h1>
                    <h3>${doc.data().Text}</h3>
                    <div class="configurationBox">
                    <input type="checkbox" class="check2">
                    <label for="check" class="icon-menu2"></label>
                    <nav class="menu2">
                        <lu>
                            <li class="editarPost" onclick="editarPost('${doc.id}','${doc.data().Option}','${doc.data().Text}')">Editar</li>
                            <li class= "eliminarP" onclick="eliminarPost('${doc.id}')">Eliminar</li>
                        </ul>
                    </nav>
                </div>
                </div>
    
      `
        });
    });

    window.editarPost = (id, menuTitulo, mensaje) => {
        console.log("gise fanny pauly", id) 
      // document.getElementById('id').value = id;
      document.getElementById('menuTitulo').value = menuTitulo;
      document.getElementById('mensaje').value = mensaje;
        const botonEditar = document.getElementById('editar');
        botonEditar.innerHTML = 'Guardar'
        botonEditar.onclick = function(){
             // Add a new document in collection "cities"
             let menuTitulo2 =  document.getElementById('menuTitulo').value;
             let mensaje2 = document.getElementById('mensaje').value;
             db.collection("mensajeMuro").doc(id).update({
                //Text: id,
                Option: menuTitulo2,
                Text: mensaje2,
            })
            .then(() => {
                console.log("Hola se escribio bien");
            })
                .catch((error) => {
                console.error("Error writing document: ", error);
                });
        }  
    }
    
        window.eliminarPost = (id) => {
            db.collection("mensajeMuro").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            }).catch((error) => {
            console.error("Error removing document: ", error);
            })
        }
        
    

    return contenedorMsmMuro;
}

    
    
   

