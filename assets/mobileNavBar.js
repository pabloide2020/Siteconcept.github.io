function navSlide() {
  const burger = document.getElementsByClassName("burger")[0];
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
}

navSlide();
