const btnReproducir = document.getElementById("btnReproducir");
const btnPausa = document.getElementById("btnPausa");
const vi = document.querySelector("video");
let play = false;

btnReproducir.addEventListener("click", () => {
    vi.play();
    play = true;
});
btnPausa.addEventListener("click", () => {
    vi.pause();
    play = false;
});