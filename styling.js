let root = document.querySelector(':root');
let darkMode = localStorage.getItem("darkMode");

if (darkMode == "yes") {
  root.style.setProperty('--gradient-color-top', '#1c131a');
  root.style.setProperty('--gradient-color-bottom', '#52374c');
  root.style.setProperty('--txt-color', 'white');
  root.style.setProperty('--btn-color', 'white');
  root.style.setProperty('--background-color', '#474747');
} else {
  root.style.setProperty('--gradient-color-top', '#ffa8ec');
  root.style.setProperty('--gradient-color-bottom', '#ffe0f8');
  root.style.setProperty('--txt-color', 'black');
  root.style.setProperty('--btn-color', '#736c75');
  root.style.setProperty('--background-color', 'white');
}