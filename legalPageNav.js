const nav = document.getElementById("pageNav");

let scrollThreshold = 50;

document.addEventListener("scroll", function() {
  if (window.scrollY > scrollThreshold) {
    nav.style.height = "6.5vh";
  }
  if (window.scrollY < scrollThreshold) {
    nav.style.height = "10vh";
  }
});