const open_button = document.getElementById("button");
const main = document.getElementById("main");

open_button.addEventListener("click", function () {
  const nav_bar = document.getElementById("nav");
  if (nav_bar.classList.contains("active")) {
    nav_bar.classList.remove("active");
    nav_bar.classList.add("noactive");
    nav_bar.style.transform = "translateX(-200px)";
    open_button.style.transform = "translateX(-200px)";
  } else {
    nav_bar.classList.remove("noactive");
    nav_bar.classList.add("active");
    nav_bar.style.transform = "translateX(0px)";
    nav_bar.style.transition = "1s ease";
    open_button.style.transform = "translateX(0px)";
    open_button.style.transition = "1s ease";
  }
});
