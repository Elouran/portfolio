const sections = document.querySelectorAll("section");
const Links = document.querySelectorAll("#link a");
const navbarHeight = document.querySelector(".navbar").offsetHeight;
document.querySelector('#link a[href="#home"]').classList.add("active");
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    Links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
