function showSlides(container, folderName, slideIndex) {
  let slides = container.getElementsByClassName(folderName + "-slides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1500, container, folderName, slideIndex);
}

const comparisonContainers = document.querySelectorAll('.slideshow-wrapper');

for (let i = 0; i < comparisonContainers.length; i++) {
  const container = comparisonContainers[i]

  showSlides(container, "left", 0);
  showSlides(container, "right", 0);
}

