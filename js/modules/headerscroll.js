export default function InitheaderScroll() {
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