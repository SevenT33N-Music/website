function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
  localStorage.setItem("darkMode", sheet);
}

// Check for Dark Mode on Page Load
var d = localStorage.getItem("darkMode");
var f = localStorage.getItem("scrollbar");
if (d == "dark.css") {
  if (f == 'true') {
    swapStyleSheet("darkCustomScroll.css");
  } else {
    swapStyleSheet("dark.css");
  }
} else if (d == 'light.css') {
  if (f == 'true') {
    swapStyleSheet("lightCustomScroll.css");
  } else {
    swapStyleSheet("light.css");
  }
} else if (d == "darkCustomScroll.css") {
  if (f == 'true') {
    swapStyleSheet("darkCustomScroll.css");
  } else {
    swapStyleSheet("dark.css");
  }
} else if (d == "lightCustomScroll.css") {
  if (f == 'true') {
    swapStyleSheet("lightCustomScroll.css");
  } else {
    swapStyleSheet("light.css");
  }
}

// Check for Smooth Scroll on Page Load
var s = localStorage.getItem("smoothScrolling");
var r = document.querySelector(':root');
if (s == 'yes') {
  r.style.setProperty('--smoothScrolling', 'smooth');
} else if (s == 'no') {
  r.style.setProperty('--smoothScrolling', 'auto');
} else if (s == null) {
  r.style.setProperty('--smoothScrolling', 'auto');
  localStorage.setItem("smoothScrolling", 'no');
}