const mobileNavigation = document.querySelector("#mobile-navigation");
const burger = document.querySelector("#burger");
const closeBtn = document.querySelector("#close-btn");

burger.addEventListener("click", () => {
  mobileNavigation.classList.remove("close");
  mobileNavigation.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  mobileNavigation.classList.remove("open");
  mobileNavigation.classList.add("close");
});
