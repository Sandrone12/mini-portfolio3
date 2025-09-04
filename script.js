// ====== ANNO NEL FOOTER ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== TEMA CHIARO/SCURO ======
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
  toggle.setAttribute("aria-pressed", "true");
  toggle.textContent = "☀️ Tema chiaro";
}
toggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.textContent = isDark ? "☀️ Tema chiaro" : "🌙 Tema scuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ====== SCROLL MORBIDO PER CTA "Vedi i progetti" ======
const cta = document.querySelector('.cta');
if (cta) {
  cta.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#progetti').scrollIntoView({ behavior: 'smooth' });
  });
}

// ====== ACTIVE LINK IN NAVBAR ======
// Link presenti nella navbar
const navLinks = document.querySelectorAll(".site-nav .nav-link");

// Elementi di riferimento (attenzione: "top" è il <main id="top">)
const mainTopEl   = document.getElementById("top");       // <main id="top">
const progettiEl  = document.getElementById("progetti");  // <section id="progetti">
const contattiEl  = document.getElementById("contatti");  // <section id="contatti">

// Offset per tenere conto dell'header sticky (in px)
const OFFSET = 120;

function setActiveLink() {
  const y = window.scrollY + OFFSET; // posizione di lettura con margine

  // Valore di default: "top" (Home)
  let current = "top";

  // Se stai oltre l'inizio di "progetti", passa a "progetti"
  if (progettiEl && y >= progettiEl.offsetTop) {
    current = "progetti";
  }

  // Se stai oltre l'inizio di "contatti", passa a "contatti"
  if (contattiEl && y >= contattiEl.offsetTop) {
    current = "contatti";
  }

  // Applica/rimuovi la classe .active sui link
  navLinks.forEach(link => {
    const href = link.getAttribute("href"); // es. "#progetti"
    const isActive = href === "#" + current;
    link.classList.toggle("active", isActive);
  });
}

// Aggiorna l'active al caricamento e ad ogni scroll
window.addEventListener("load", setActiveLink);
window.addEventListener("scroll", setActiveLink);
