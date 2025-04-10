export default function initMenu() {
  const btnMenu = document.getElementById("btn-menu");
  const menuMobile = document.getElementById("menu-mobile");
  const overlay = document.getElementById("overlay-menu");
  const btnClose = document.querySelector(".menu-mobile .btn-close");

  function openMenu() {
    menuMobile.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menuMobile.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  btnMenu.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll(".menu-mobile a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Verificar tamanho da tela e alternar entre menu desktop/mobile
  function checkScreenSize() {
    if (window.innerWidth > 1020) {
      btnMenu.style.display = "none";
      if (menuMobile.classList.contains("active")) {
        closeMenu();
      }
    } else {
      btnMenu.style.display = "block";
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize(); // Executa ao carregar
}
