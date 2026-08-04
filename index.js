// =========================
// Typing Effect
// =========================

const type = document.querySelector("#typing");
const text = "Aditya Dubey";

type.textContent = "";
let idx = 0;

function typer() {
    if (idx < text.length) {
        type.textContent += text.charAt(idx);
        idx++;
        setTimeout(typer, 250);
    }
}

typer();


// =========================
// Generate Stars
// =========================

const stars = document.getElementById("stars");

for (let i = 0; i < 220; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = Math.random();

    stars.appendChild(star);
}


// =========================
// Rocket Animation
// =========================

const launch = document.querySelector(".launch-btn");
const rocket = document.querySelector(".rocket");


// Sections
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");


// Skills
const skillTitle = document.querySelector(".skill-title");
const line = document.querySelector(".line");
const solarSystem = document.querySelector(".solar-system");
const skillPlanets = document.querySelectorAll(".planets");


// Projects
const projectTitle = document.querySelector(".project-title");
const projectLine = document.querySelector(".project-line");
const projectSystem = document.querySelector(".project-system");
const projectPlanets = document.querySelectorAll(".project-planet");
launch.addEventListener("click", () => {

    rocket.classList.add("launch");

});
const Certificates = document.querySelector("#Certificates");
const Certificates_title = document.querySelector(".Certificates-title")
const subTitles = document.querySelectorAll(".sub-title");
rocket.addEventListener("animationend", () => {

    about.style.display = "flex";

    skills.style.display = "block";
    skillTitle.style.display = "block";
    line.style.display = "block";
    solarSystem.style.display = "block";

    skillPlanets.forEach((planet)=>{
        planet.style.display = "flex";
    });

    projects.style.display = "block";
    projectTitle.style.display = "block";
    projectLine.style.display = "block";
    projectSystem.style.display = "block";

    projectPlanets.forEach((planet)=>{
        planet.style.display = "flex";
    });

    subTitles.forEach((title)=>{
        title.style.display = "block";
    });

    about.scrollIntoView({
        behavior:"smooth"
    });
    Certificates.style.display = "block";
    Certificates_title.style.display = "block";
    const Certificates_line = document.querySelector(".Certificates-line");
    Certificates_line.style.display = "block";
    const Certificates_system = document.querySelector(".Certificates-system");
    Certificates_system.style.display = "block";
    const Certificates_planets = document.querySelectorAll(".Certificates-planet");
    Certificates_planets.forEach((planet)=>{
        planet.style.display = "block";
    });
    const Certificate_planets = document.querySelectorAll(".Certificate-planet");
    Certificate_planets.forEach((planet)=>{
        planet.style.display = "block";
    });
});
const form = document.getElementById("contact-form");

emailjs.init({
  publicKey: "IYf-JWSYM607z9hP2",
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = document.querySelector(".send-btn");
  btn.innerText = "Sending...";
  btn.disabled = true;

  emailjs
    .sendForm(
      "service_8qs6t3c",      // Service ID
      "template_7q9c5nv",     // Template ID
      form                    // Form element
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send message.");
    })
    .finally(() => {
      btn.innerText = "🚀 Send Message";
      btn.disabled = false;
    });
});