window.addEventListener("resize", checkWindowSize);
console.log(window.innerWidth);
function checkWindowSize() {
  if (window.innerWidth < 375) {
    document.getElementById("home").style.display = "none";
    document.getElementById("fixedNavBtn").style.display = "none";
    document.getElementById("smallScreenAlert").style.justifyContent = "center";
    document.getElementById("smallScreenAlert").style.alignItems = "center";
    document.getElementById("smallScreenAlert").style.display = "block";
  } else {
    document.getElementById("home").style.display = "block";
    document.getElementById("fixedNavBtn").style.display = "flex";
    document.getElementById("smallScreenAlert").style.display = "none";
  }
}
checkWindowSize();


var setDarkMode = localStorage.getItem("darkMode");
if (setDarkMode == null) {
  localStorage.setItem("darkMode", "no");
  setDarkMode = "no";
}
var originalDarkModeChoice = setDarkMode;


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openSettings() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("settings").style.display = "block";
  document.getElementById("backSettings").style.display = "block";
  document.getElementById("closeNav").style.display = "none";
}
function closeSettings() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("settings").style.display = "none";
  document.getElementById("backSettings").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
}
function openAboutMe() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("aboutMe").style.display = "block";
  document.getElementById("backAbout").style.display = "block";
  document.getElementById("closeNav").style.display = "none";
}
function closeAboutMe() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("aboutMe").style.display = "none";
  document.getElementById("backAbout").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
}
function openFancyText() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("fancyText").style.display = "block";
  document.getElementById("backTxt").style.display = "block";
  document.getElementById("closeNav").style.display = "none";
}
function closeFancyText() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("fancyText").style.display = "none";
  document.getElementById("backTxt").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
}
function openCredits() {
  document.getElementById("nav").style.display = "none";
  document.getElementById("closeNav").style.display = "none";
  document.getElementById("backCredit").style.display = "block";
  document.getElementById("credits").style.display = "block";
}
function closeCredits() {
  document.getElementById("nav").style.display = "block";
  document.getElementById("closeNav").style.display = "block";
  document.getElementById("backCredit").style.display = "none";
  document.getElementById("credits").style.display = "none";
}
function openNews() {
  document.getElementById("news").style.display = "block";
  document.getElementById("backNews").style.display = "block";
  document.getElementById("nav").style.display = "none";
  document.getElementById("closeNav").style.display = "none";
}
function closeNews() {
  document.getElementById("news").style.display = "none";
  document.getElementById("backNews").style.display = "none";
  document.getElementById("nav").style.display = "block";
  document.getElementById("closeNav").style.display = "block";
}


function copyText(value) {
  var copyText = document.getElementById("copyTxt");
  copyText.value = value;
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
}


function toggleOptions(id,type) {
  var checkBox = document.getElementById(id);
  if (checkBox.checked == true) {
    if (type == "darkMode") {
      console.log("checked!")
      setDarkMode = "yes";
    }
  } else {
    if (type == "darkMode") {
      console.log("unchecked.")
      setDarkMode = "no";
    }
  }
  checkChoices();
}
function saveOptions() {
  if (setDarkMode == "yes") {
    localStorage.setItem("darkMode", "yes");
  } else if (setDarkMode == "no") {
    localStorage.setItem("darkMode", "no");
  }
  if (setDarkMode != originalDarkModeChoice) {
    window.location.href = "";
  }
  /*
  let text = "Are You Sure You Want To Save These Changes?";
  if ((setDarkMode != originalDarkModeChoice)) {
    if (confirm(text) == true) {
      window.location.href = "";
    } else {
      localStorage.setItem("darkMode", originalDarkModeChoice);
    }
  } else {
    alert("Please Change Something Before Saving...");
  }
  */
}


function checkChoices() {
  if (setDarkMode != originalDarkModeChoice) {
    root.style.setProperty("--save-btn-color", "#8ab28a");
  } else {
    root.style.setProperty("--save-btn-color", "transparent");
  }
}


function loadMusicPage() {
  closeNav();
  document.getElementById("homeNav").style.display = "block";
  document.getElementById("musicNav").style.display = "none";
  document.getElementById("music").style.display = "block";
  document.getElementById("home").style.display = "none";
}
function loadHomePage() {
  closeNav();
  document.getElementById("homeNav").style.display = "none";
  document.getElementById("musicNav").style.display = "block";
  document.getElementById("music").style.display = "none";
  document.getElementById("home").style.display = "block";
}
function loadNews() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {readAndParseXMLData(this);}
  xhttp.open("GET", "/news.xml");
  xhttp.send();
}
function readAndParseXMLData(xml) {
  const xmlDoc = xml.responseXML;
  const data = xmlDoc.getElementsByTagName("item");
  let p = "";
  for (let i = 0; i < data.length; i++) {
    p += "<h2>" +
      data[i].getElementsByTagName("header")[0].childNodes[0].nodeValue +
      "</h2><br><p>" +
      data[i].getElementsByTagName("info")[0].childNodes[0].nodeValue +
      "</p><br><br><h6>" +
      data[i].getElementsByTagName("time")[0].childNodes[0].nodeValue +
      "</h6><br><hr><br>";
  }
  document.getElementById("newsFromXMLFile").innerHTML = p;
  document.getElementById("news").style.paddingTop = "1.5vh";
}


let backBtn = document.getElementById("backSettings");
let arrow = document.getElementById("rotateArrow");
backBtn.addEventListener('mouseenter', () => {
  arrow.classList.remove("rotate-arrow-start");
  arrow.classList.add("rotate-arrow");
  console.log("Mouse In!");
});
backBtn.addEventListener('mouseleave', () => {
  arrow.classList.add("rotate-arrow-start");
  arrow.classList.remove("rotate-arrow");
  console.log("Mouse Out.");
});


let darkModeBtn = document.querySelector("#darkModeToggle");
let darkModeLocalStorage = localStorage.getItem("darkMode");
if (darkModeLocalStorage == "yes") {
  darkModeBtn.checked = true;
}
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadNews();
  }
}
var imgLoaded = 0;
function displayImage() {
  document.getElementById("image").style.opacity = "1";
  document.getElementById("imgLoader").style.display = "none";
  imgLoaded = 1;
}
var time;
setTimeout(checkImageStatus, 3000);
function checkImageStatus() {
  if (imgLoaded == 0) {
    time = setTimeout(displayImage, 1000);
  }
}