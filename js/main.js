// Configurações gerais do site
console.log("Portfolio carregado");

// Carrega módulos
import initMenu from "./menu.js";
import initContact from "./contact.js";
import initAnimations from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initContact();
  initAnimations();
});
