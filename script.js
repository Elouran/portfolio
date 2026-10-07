const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("#link a");
const navbar = document.querySelector(".navbar");
const menu = document.getElementById("link");
const burger = document.getElementById("burger");
const routeFill = document.getElementById("routeFill");

// Menu burger (mobile)
function setMenu(open) {
    menu.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
links.forEach(l => l.addEventListener("click", () => setMenu(false)));
window.addEventListener("resize", () => { if (window.innerWidth > 800) setMenu(false); });

// Lien actif + "voie" qui se remplit au scroll
function onScroll() {
    const offset = navbar.offsetHeight + 120;
    let current = "home";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - offset) current = s.id; });

    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= max - 5) current = "contact";

    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));
    routeFill.style.height = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
