import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const container = document.getElementById("content");

function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.textContent = "Ristorante";

  container.appendChild(header);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menù";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("button-nav");
  aboutButton.textContent = "About";
  aboutButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(aboutButton);
    loadAbout();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "This is the footer!";

  return footer;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function loadWebsite() {
  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
}

export default loadWebsite;
