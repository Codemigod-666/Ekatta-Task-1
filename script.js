document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    let translateX = 0;
  
    prevButton.addEventListener("click", function() {
      translateX += 300;
      sliderContainer.style.transform = `translateX(${translateX}px)`;
    });
  
    nextButton.addEventListener("click", function() {
      translateX -= 300;
      sliderContainer.style.transform = `translateX(${translateX}px)`;
    });
  });