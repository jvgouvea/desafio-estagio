// Mostrar e ocultar texto na parte de Diferenciais
function initHidden() {
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

//Menu mobile
function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("ativo");
  }

  btnMobile.addEventListener("click", toggleMenu);
}

//Fechar menu mobile ai clicar em um link interno
function initCloseMenuMobile() {
  const itemMenuMobile = document.querySelectorAll("#nav .header-menu li a");

  function closeMenu() {
    const nav = document.getElementById("nav");
    nav.classList.remove("ativo");
  }

  itemMenuMobile.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}

function InitheaderScroll() {
  const header = document.querySelector(".header-bg");

  function mudarHeader() {
    const btnMobile = document.querySelector("#btn-mobile");
    if (window.scrollY > 0) {
      header.classList.add("header-scroll");
      btnMobile.classList.remove("hamburguer-fundo");
    } else {
      btnMobile.classList.add("hamburguer-fundo");
      header.classList.remove("header-scroll");
    }
  }

  window.addEventListener("scroll", mudarHeader);
}

initHidden();
initMenuMobile();
initCloseMenuMobile();
InitheaderScroll();
