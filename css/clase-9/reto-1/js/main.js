const $boxSquare = document.getElementById("boxSquare");
const classList = ["to-right", "to-bottom", "to-left", "to-top"];
document.getElementById("btn-start").addEventListener("click", () => {
    let index = 0;
    let animateInterval = setInterval(() => {
        $boxSquare.classList.add(classList[index]);
        index++;
        if (classList.length === index) {
            index = 0;
            clearInterval(animateInterval);
            reiniciar();
          }
        }, 500);

        const reiniciar = () =>
          classList.map((item) => $boxSquare.classList.remove(item));
      });