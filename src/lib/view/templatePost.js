
export const post = () => {
    const db = firebase.firestore();
    

const contenedorMsmMuro = document.getElementById('postMuro');
    db.collection("mensajeMuro").onSnapshot((querySnapshot) => {
  contenedorMsmMuro.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Option}`);

            contenedorMsmMuro.innerHTML += `
                <div id="boxMuro" class="boxMuro"> 
                    <h5 id="id">${doc.id}</h5>
                    <h1>${doc.data().Option}</h1>
                    <h3>${doc.data().Text}</h3>
                    <div class="configurationBox">
                    <input type="checkbox" id="check2">
                    <label for="check" class="icon-menu2">Menu</label>
                    <nav class="menu2">
                        <lu>
                            <li>Editar</li>
                            <li onclick="eliminarPost('${doc.id}')">Eliminar</li>
                        </lu>
                    </nav>
                </div>
                </div>
    
      `
        });
    });

    window.eliminarPost = (id) => {
        console.log("gise fanny pauly", id)
    }


    /*db.collection("mensajeMuro").doc("DC").delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });*/


    return contenedorMsmMuro;
}

    
   

