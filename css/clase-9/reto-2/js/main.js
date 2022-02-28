const caja = document.getElementById("caja");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
        caja.classList.add('mostrarCaja');
        setInterval(() => {
            caja.classList.add('ocultarCaja');
            
        }, 5000);
    });

