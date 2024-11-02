function showSlides(folderName, slideIndex) {
  let slides = document.getElementsByClassName(folderName + "-slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1500, folderName, slideIndex);
}

showSlides("russian-culture", 0);
showSlides("blood", 0);
