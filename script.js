// ===============================
// Smooth Scroll for Navigation
// ===============================
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// ===============================
// Navbar Background on Scroll
// ===============================
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "#111827";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Reveal Sections on Scroll
// ===============================
const sections = document.querySelectorAll("section");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();

// ===============================
// Typing Effect
// ===============================
const text = "Java Full Stack Developer";
const typingElement = document.querySelector(".hero-content h2");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typingElement.textContent = "";

typeText();

// ===============================
// Active Navigation Link
// ===============================
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Hover Effect for Skill Cards
// ===============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

// ===============================
// Footer Year
// ===============================
const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Kandala Manoj | Java Full Stack Developer | All Rights Reserved`;