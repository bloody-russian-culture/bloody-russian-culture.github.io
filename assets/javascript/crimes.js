(function () {
  function setup(carousel) {
    const track = carousel.querySelector(".carousel__track");
    const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const count = carousel.querySelector("[data-carousel-count]");

    if (!track || slides.length < 2) return;

    function current() {
      const middle = track.scrollLeft + track.clientWidth / 2;
      let index = 0;
      let best = Infinity;
      slides.forEach(function (slide, i) {
        const distance = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - middle);
        if (distance < best) {
          best = distance;
          index = i;
        }
      });
      return index;
    }

    function render() {
      const index = current();
      if (count) count.textContent = index + 1 + " / " + slides.length;
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    }

    function go(step) {
      const target = slides[Math.min(Math.max(current() + step, 0), slides.length - 1)];
      track.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }

    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") { go(-1); event.preventDefault(); }
      if (event.key === "ArrowRight") { go(1); event.preventDefault(); }
    });

    let pending;
    track.addEventListener("scroll", function () {
      window.clearTimeout(pending);
      pending = window.setTimeout(render, 80);
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-carousel]").forEach(setup);
  });
})();
