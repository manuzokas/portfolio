export default function initContact() {
  const contactForm = document.getElementById("quick-contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("quick-email").value;

      if (validateEmail(email)) {
        window.location.href = `mailto:manuella.rodrigues.dev@gmail.com?subject=Contato via Portfolio&body=Olá, meu email é ${email}. Podemos conversar?`;
      } else {
        alert("Por favor, insira um email válido.");
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
