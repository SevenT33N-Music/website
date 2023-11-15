var setGlowEffect = localStorage.getItem("glowEffect");
var setAnimations = localStorage.getItem("smoothAnimations");
if (setGlowEffect == null) {
  localStorage.setItem("glowEffect", "yes");
  setGlowEffect = "yes";
}
if (setAnimations == null) {
  localStorage.setItem("smoothAnimations", "yes");
  setAnimations = "yes";
}
var ogGlowEffectChoice = setGlowEffect;
var ogAnimationChoice = setAnimations;
localStorage.setItem('currentPage','home');
let root = document.querySelector(':root');
let darkMode = localStorage.getItem("darkMode");
let glowEffect = localStorage.getItem("glowEffect");

function setPageStyling() {
  if (darkMode == "yes") {
    root.style.setProperty('--gradient-color-one', 'rgba(7, 93, 232, 0.48)');
    root.style.setProperty('--gradient-color-two', 'rgba(47, 47, 130, 0.08)');
    root.style.setProperty('--txt-color', 'rgb(255,255,255)');
    root.style.setProperty('--btn-color', 'rgb(255,255,255)');
    root.style.setProperty('--background-color', 'rgb(30, 30, 30)');
    root.style.setProperty('--body-background', 'rgb(13, 13, 13)');
    root.style.setProperty('--border-color', '#aeb2b8');
    if (glowEffect == "yes") {
      root.style.setProperty('--box-shadow-color', 'rgba(166, 176, 191, 0.6)');
    } else {
      root.style.setProperty('--box-shadow-color', 'rgba(10, 10, 10, 0.6)');
    }
    if (setAnimations == "yes") {
      root.style.setProperty('--transition-duration', '0.45s');
      root.style.setProperty('--slower-transition-duration', '0.85s');
    } else {
      root.style.setProperty('--transition-duration', '0s');
      root.style.setProperty('--slower-transition-duration', '0s');
    }
  } else {
    root.style.setProperty('--gradient-color-one', 'rgba(193, 207, 230, 0.50)');
    root.style.setProperty('--gradient-color-two', 'rgba(54, 212, 247, 0.35)');
    root.style.setProperty('--txt-color', 'rgb(225, 225, 225)');
    root.style.setProperty('--btn-color', 'rgb(215, 208, 217)');
    root.style.setProperty('--background-color', 'rgb(40, 40, 40)');
    root.style.setProperty('--body-background', 'rgb(140, 155, 192)');
    root.style.setProperty('--border-color', '#757575');
    if (glowEffect == "yes") {
      root.style.setProperty('--box-shadow-color', 'rgba(193, 207, 230, 0.6)');
    } else {
      root.style.setProperty('--box-shadow-color', 'rgba(10, 10, 10, 0.6)');
    }
  }
}

setPageStyling();