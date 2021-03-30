

export const post = () => {
    const db = firebase.firestore();


const contenedorMsmMuro = document.getElementById('postMuro');
    db.collection("mensajeMuro").onSnapshot((querySnapshot) => {
  //contenedorMsmMuro.innerHTML = '';
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Option}`);

            contenedorMsmMuro.innerHTML += `
                <div id="boxMuro">  
                    <h1>${doc.data().Option}</h1>
                    <h3>${doc.data().Text}</h3>


                </div>
    
      `
        });
    });
    return contenedorMsmMuro;
}