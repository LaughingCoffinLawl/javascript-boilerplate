// Add your enhancements here

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const slide = document.querySelector(".carousel-slide");
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let currentIndex = 0;
let slideInterval;

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
  updateDotColors();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
  updateDotColors();
}

function updateSlide() {
  slide.innerHTML = `<img src="${images[currentIndex]}" id="img" alt="Image ${
    currentIndex + 1
  }">`;
}

function updateDotColors() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === currentIndex ? "red" : "gray";
  });
}

function createDots() {
  const dotContainer = document.querySelector(".dot-container");
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotContainer.appendChild(dot);
  });
  updateDotColors();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Initial slide update
updateSlide();
createDots();

// Set an interval for automatic slideshow
function startSlideshow() {
  slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function pauseSlideshow() {
  clearInterval(slideInterval);
}

startSlideshow();

// Add event listeners for pause on hover
slide.addEventListener("mouseenter", pauseSlideshow);
slide.addEventListener("mouseleave", startSlideshow);

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "ArrowRight") {
    nextSlide();
  }
});
