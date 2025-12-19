// Botão para voltar ao topo
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Função de revelar elementos ao scroll
const scrollElements = document.querySelectorAll(".scroll-reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    // Se o elemento estiver visível na tela
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // remove se sair da tela (opcional)
    }
  });
}

// Eventos
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);