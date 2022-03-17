const caja = document.getElementById("caja-tarjeta");
let btn = document.getElementById('btnObte');
//let modal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: false});
    //   modal.show();
    //   modal.hide();
const serverURL = 'http://localhost:4000/posts';
function pintar() {
  
  let data = getPosts(serverURL);
  let datos = "";
  data.then(( dataResponse => {
    for(let valor of dataResponse) {
      console.log(valor);
            datos += (`
          <div class="col-4">
              <div class="card-body caja">
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
                      ${valor.keywords[0]}
                      </li>
                      <li class="list-group-item">
                      ${valor.keywords[1]}
                      </li>
                      <li class="list-group-item">
                      ${valor.keywords[2]}
                      </li>
                      <p class="card-text ">${valor.content}</p>
                       </ul>
                    <div class="col-3 align-self-end">
                      <p class="card-text ">reactions ${valor.reactions}</p>
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning" onclick="App.Editar($)">Editar</button>
                        <button type="button" class="btn btn-danger" onclick="App.Borrar($)">Borrar</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          `);
      }
      return caja.innerHTML = datos;

    }
  ));
}
async function getPosts(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json(); 
}
pintar();
// npm run serverserver