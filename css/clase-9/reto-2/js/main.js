const caja = document.getElementById("caja");
const caja1 = document.getElementById("caja1");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
        caja.classList.add('mostrarCaja');
        caja1.classList.add('mostrarCaja1');
        setInterval(() => {
            caja1.classList.remove('mostrarCaja1');
            caja1.classList.add('ocultarCaja');
            
        }, 5000);
    });

