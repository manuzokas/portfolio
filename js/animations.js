export default function initAnimations() {
  // Animação do logo
  const logo = document.querySelector(".logo img");
  if (logo) {
    logo.addEventListener("mouseover", () => {
      logo.style.transform = "rotate(360deg)";
      logo.style.transition = "transform 1s";
    });

    logo.addEventListener("mouseout", () => {
      logo.style.transform = "rotate(0deg)";
    });
  }

  // Animação de scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Animação de aparecimento das seções
  const sections = document.querySelectorAll(".section");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });

  // Botão "Voltar ao Topo" - Código novo
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    // Mostrar/esconder o botão conforme rolagem
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
      } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
      }
    });

    // Rolagem suave ao clicar
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
