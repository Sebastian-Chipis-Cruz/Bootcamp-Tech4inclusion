const serverURL = 'http://localhost:4000/posts';
const postsList = document.getElementById("box-card");
const formSentData = document.getElementById("formSentData");
const txtName = document.getElementById("txtName");
const txtIdioms = document.getElementById("txtIdioms");
const numReactions = document.getElementById("numReactions");
const txtContents = document.getElementById("txtContents");
const formEdiData = document.getElementById("formEditData");
const txtEditId = document.getElementById("txtEditId");
const txtEditName = document.getElementById("txtEditName");
const txtEditIdioms = document.getElementById("txtEditIdioms");
const numEditReactions = document.getElementById("numEditReactions");
const txtEditContents = document.getElementById("txtEditContents");
const modal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: false});

function renderPosts(dataResponse) {
  let datos = "";
  dataResponse.map((valor) => {
      /* este codigo es temporal prueba */
      //console.log(valor.keywords);
            datos += /*html*/`
          <div class="col-4 bg-ligt">
              <div class="card-body">
            <div class="card text-center">
              <div class="col-2 align-self-start">
                    <p>id ${valor.id}</p>
                    <img src="./img/user.png" width="30px" height="30px" class="rounded-circle" alt="">
                  </div>
                  <div class="col-12 align-self-center">
                    <h5 class="card-title">prueba de tarjeta</h5>
                    <p class="card-text">${valor.title}</p>
                    <ul class="list-group">
                      <li class="list-group-item">
                      
                      </li>
                      </li>
                      <p class="card-text">${valor.content}</p>
                       </ul>
                    <div class="col-3 align-self-end">
                      <p class="card-text">reactions ${valor.reactions}</p>
                    </div>
                    <div class="row justify-content-end">
                      <div class="btn-group"  data-id="${valor.id}">
                          <button type="button" class="btn btn-warning" id="btnEdit">Editar</button>
                          <button type="button" class="btn btn-danger" id="btnDelete">Borrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          `});
         postsList.innerHTML = datos;
    }
fetch(serverURL)
  .then(response => response.json())
  .then(dataResponse => renderPosts(dataResponse));

async function addPost(url = "",option ="", data = {}) {
    const response = await fetch(url, {
      method: option, 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json(); 
}
const dataSend = addPost;
formSentData.addEventListener('submit',(event) =>{
  event.preventDefault();
  dataSend(serverURL,"POST",{
    "title": txtName.value,
      "keywords":txtIdioms.value.split(","),
      "reactions": numReactions.value,
      "content": txtContents.value
  });
});
formEdiData.addEventListener('submit',(event) =>{
  event.preventDefault();
  dataSend(`${serverURL}/${txtEditId.value}`,"PUT",{
    "title": txtEditName.value,
    "keywords":txtEditIdioms.value.split(","),
    "reactions": numEditReactions.value,
    "content": txtEditContents.value
  })
  modal.hide();
});
postsList.addEventListener('click', (event) =>{
  event.preventDefault();
  let btnEdit = event.target.id == "btnEdit";
  let btnDelete = event.target.id == "btnDelete";
  
  const id = event.target.parentNode.dataset.id;

  if (btnDelete) {
    fetch(`${serverURL}/${id}`,{
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => renderPosts(dataResponse))
    .catch(err => {console.error(err);})
  }
  if (btnEdit) {
      fetch(`${serverURL}/${id}`)
      .then(response => response.json())
      .then(dataResponse => {
        txtEditId.value =  dataResponse.id;
        txtEditName.value = dataResponse.title;
        txtEditIdioms.value = dataResponse.keywords.join();
        numEditReactions.value = dataResponse.reactions;
        txtEditContents.value = dataResponse.content;
      })
      .catch(err => {
        console.error(err);
      });
 
      modal.show();
  }
});
