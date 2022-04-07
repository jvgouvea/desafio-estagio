export function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("ativo");
  }

  btnMobile.addEventListener("click", toggleMenu);
}

//Fechar menu mobile ai clicar em um link interno
export function initCloseMenuMobile() {
  const itemMenuMobile = document.querySelectorAll("#nav .header-menu li a");

  function closeMenu() {
    const nav = document.getElementById("nav");
    nav.classList.remove("ativo");
  }

  itemMenuMobile.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}
