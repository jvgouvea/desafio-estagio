export default function initHidden() {
  const hiddenCard = document.querySelectorAll(".card-titulo");
  const cardTexto = document.querySelectorAll(".card p");

  if (hiddenCard.length && cardTexto.length) {
    hiddenCard[0].classList.add("setajs");
    hiddenCard[1].classList.add("setajs");
    cardTexto[0].classList.add("mostrar");
    cardTexto[1].classList.add("mostrar");

    function ocultarTexto() {
      this.nextElementSibling.classList.toggle("mostrar");
      this.classList.toggle("setajs");
    }

    hiddenCard.forEach((item) => {
      item.addEventListener("click", ocultarTexto);
    });
  }
}