

export const post = () => {
    const db = firebase.firestore();


const contenedorMsmMuro = document.getElementById('postMuro');
    db.collection("mensajeMuro").onSnapshot((querySnapshot) => {
  //contenedorMsmMuro.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Option}`);

            contenedorMsmMuro.innerHTML += `
                <div id="boxMuro" class="boxMuro">  
                    <h1>${doc.data().Option}</h1>
                    <h3>${doc.data().Text}</h3>
                    <div class="configuration">
                    <input type="checkbox" id="check">
                    <label for="check" class="icon-menu">Menu</label>
                    <nav class="menu">
                        <lu>
                            <li>Editar</li>
                            <li>Eliminar</li>
                        </lu>
                    </nav>
                </div>


                </div>
    
      `
        });
    });

    db.collection("mensajeMuro").doc("DC").delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });


    return contenedorMsmMuro;
}