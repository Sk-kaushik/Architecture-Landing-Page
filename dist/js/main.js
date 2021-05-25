var burger = document.querySelector(".burger");
var drawer = document.querySelector(".right-verticle-nav");

window.addEventListener("load", () => {
  burger.addEventListener("click", () => {
    console.log("object");
    burger.classList.toggle("rotate");
    drawer.classList.toggle("active");
  });
});
