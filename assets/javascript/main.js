function showSlides(container, folderName, slideIndex) {
  let slides = container.getElementsByClassName(folderName + "-slides");
  if (slides.length === 0) return;

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

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]")
  const currentHost = location.hostname;

  links.forEach(function(link) {
    const linkHost = new URL(link.href).hostname
    if (linkHost && linkHost !== currentHost) {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener noreferrer")
    }
  })
});

(function () {
  const goUp = document.querySelector("[data-go-up]");
  if (!goUp) return;

  function toggle() {
    goUp.classList.toggle("go-up--visible", window.scrollY > 300);
  }

  goUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
})();
