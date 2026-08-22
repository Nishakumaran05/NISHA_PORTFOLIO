/* =========================================================
   NISHA K PORTFOLIO JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* ================= NAVBAR ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const body = document.body;

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    body.classList.toggle("menu-open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        body.classList.remove("menu-open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveLink
);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    formData.append(
        "access_key",
        "16052b41-5a39-4502-bf09-d0e771e60b1d"
    );

    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (response.ok && data.success) {

            alert("Success! Your message has been sent.");

            form.reset();

        } else {

            alert("Error: " + data.message);

        }

    } catch (error) {

        alert("Something went wrong. Please try again.");

    } finally {

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

    }

});

/* ================= PROJECT HOVER ================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ================= CURRENT YEAR ================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} Nisha K. All Rights Reserved.`;

}


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

        body.classList.remove("menu-open");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});
