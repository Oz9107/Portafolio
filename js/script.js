//archivo js
// animaciones
var typed = new Typed(".typing", {
  strings: [
    "Desarrollador Web Full Stack",
    "Desarrollador Web Front End",
    "Desarrollador Web Back End",
    "¡Contactame!",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// aside navbar
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

// Function to handle the click event on each nav link
function handleNavLinkClick(event) {
  event.preventDefault();
  const selectedNavLink = event.target;
  const targetSectionId = selectedNavLink.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  for (let j = 0; j < totalNavList; j++) {
    navList[j].querySelector("a").classList.remove("active");
  }

  selectedNavLink.classList.add("active");
  showSection(targetSectionId);

  if (window.innerWidth < 1200) {
    asideSectionTogglerBtn();
  }
}

// Function to show the selected section
function showSection(sectionId) {
  const targetSection = document.querySelector(`#${sectionId}`);
  targetSection.classList.add("active");
}

// Function to update the active link in the nav
function updateNav(selectedElement) {
  const targetSectionId = selectedElement.getAttribute("href").split("#")[1];

  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const currentSectionId = navList[i]
      .querySelector("a")
      .getAttribute("href")
      .split("#")[1];

    if (targetSectionId === currentSectionId) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// Function to handle the click event on the "hire me" button
function handleHireMeButtonClick(event) {
  event.preventDefault();
  showSection(this);
  updateNav(this);
}

document
  .querySelector(".hire-me")
  .addEventListener("click", handleHireMeButtonClick);

// Event listener for the nav links
for (let i = 0; i < totalNavList; i++) {
  const navLink = navList[i].querySelector("a");
  navLink.addEventListener("click", handleNavLinkClick);
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

// Function to toggle the aside section and nav links visibility
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

//carrusel
const carousel = document.querySelector(".portfolio-carousel");
const itemsContainer = carousel.querySelector(".portfolio-items");
const prevButton = carousel.querySelector(".prev-button");
const nextButton = carousel.querySelector(".next-button");
let currentIndex = 0;

function moveCarousel(direction) {
  const itemWidth = itemsContainer.firstElementChild.offsetWidth;
  const numVisibleItems = 1; // Cambia esto para mostrar más o menos proyectos a la vez

  currentIndex += direction * numVisibleItems;

  const numItems = itemsContainer.children.length;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= numItems - numVisibleItems + 1) {
    currentIndex = numItems - numVisibleItems;
  }

  const translateX = -currentIndex * (itemWidth + 10); // 20 es el margen entre proyectos
  itemsContainer.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener("click", () => {
  moveCarousel(-1);
});

nextButton.addEventListener("click", () => {
  moveCarousel(1);
});
const botonModo = document.getElementById("cambiarModo");
const body = document.body;

botonModo.addEventListener("click", function () {
  if (body.classList.contains("modo-claro")) {
    // Cambia al modo oscuro
    body.classList.remove("modo-claro");
    body.classList.add("modo-oscuro");
    botonModo.innerHTML = '<i class="fas fa-sun"></i>'; // Cambia al icono de sol
  } else {
    // Cambia al modo claro
    body.classList.remove("modo-oscuro");
    body.classList.add("modo-claro");
    botonModo.innerHTML = '<i class="fas fa-moon"></i>'; // Cambia al icono de luna
  }
});
