const postsList = document.getElementById("box-card");
const formSentData = document.getElementById("formSentData");
const txtName = document.getElementById("txtName");
let serverURL = 'http://localhost:4000/posts';

function renderPosts(dataResponse) {
  let datos = "";
  dataResponse.map((valor) => {
      /* este codigo es temporal prueba */
      //console.log(valor.keywords);
            datos += /*html*/`
          <div class="col-4 bg-ligt">
              <div class="card-body" data-id="${valor.id}">
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
                      <div class="btn-group">
                          <button type="button" class="btn btn-warning" id="Editar">Editar</button>
                          <button type="button" class="btn btn-danger" id="Borrar">Borrar</button>
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