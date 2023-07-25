// animaciones
var typed = new Typed(".typing", {
  strings: ["Desarrollador Web Front End", "Desarrollador Web Back End"],
  typeSpeed: 70,
  backSpeed: 70,
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
