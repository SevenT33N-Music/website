let blurDivs = document.querySelectorAll('.music-item');
console.log(blurDivs);
if (blurDivs.length < 1) {
  blurDivs = document.querySelectorAll('.img-container');
}
blurDivs.forEach(div => {
  const img = div.querySelector("img");

  function loaded() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener('load', loaded);
  }
})