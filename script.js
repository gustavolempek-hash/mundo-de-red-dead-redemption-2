// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fecha o menu quando o usuário clica em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ===============================
// CURIOSIDADES
// ===============================

const facts = document.querySelectorAll(".fact");
const factDisplay = document.getElementById("factDisplay");

facts.forEach(fact => {

    fact.addEventListener("click", () => {

        const text = fact.getAttribute("data-text");

        factDisplay.innerHTML = `
            <p>🤠 ${text}</p>
        `;

    });

});


// ===============================
// SPOILER
// ===============================

const spoilerBtn = document.getElementById("spoilerBtn");
const spoilerText = document.getElementById("spoilerText");

spoilerBtn.addEventListener("click", () => {

    spoilerText.classList.toggle("show");

    if (spoilerText.classList.contains("show")) {

        spoilerBtn.textContent = "Esconder informação";

    } else {

        spoilerBtn.textContent = "Mostrar informação";

    }

});


// ===============================
// ANIMAÇÃO AO ENTRAR NA TELA
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(section => {

    observer.observe(section);

});


// ===============================
// EFEITO NO MENU AO ROLAR
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "rgba(0, 0, 0, 0.97)";

    } else {

        header.style.background = "rgba(5, 5, 5, 0.92)";

    }

});


// ===============================
// ANO ATUAL DO RODAPÉ
// ===============================

console.log("Site RDR II carregado com sucesso!");
