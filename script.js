// Create Page Variables
var getCurrentPage = localStorage.getItem("currentPage");
if (getCurrentPage == null) {
  localStorage.setItem("currentPage", "home");
}

// Create Settings Variables
var setDarkMode = localStorage.getItem("darkMode");
if (setDarkMode == null) {
  localStorage.setItem("darkMode", "no");
  setDarkMode = "no";
}
var originalDarkModeChoice = setDarkMode;

// CHECK WINDOW SIZING
function checkWindowSize() {
  let currentPage = localStorage.getItem("currentPage");
  let darkModeEnabled = localStorage.getItem("darkMode");
  if (window.innerWidth < 275) {
    document.getElementById("home").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("fixedNavBtn").style.display = "none";
    document.getElementById("smallScreenAlert").style.display = "flex";
    document.getElementById("smallScreenAlert").style.justifyContent = "center";
    document.getElementById("smallScreenAlert").style.alignItems = "center";
    if (darkModeEnabled == "yes") {
      document.getElementById("smallScreenAlert").style.color = "white";
    } else {
      document.getElementById("smallScreenAlert").style.color = "black";
    }
  } else {
    if (currentPage == "home") {
      document.getElementById("home").style.display = "block";
      document.getElementById("fixedNavBtn").style.display = "flex";
      document.getElementById("smallScreenAlert").style.display = "none";
    } else if (currentPage == 'music') {
      document.getElementById("music").style.display = "block";
      document.getElementById("fixedNavBtn").style.display = "flex";
      document.getElementById("smallScreenAlert").style.display = "none";
    }
  }
}
checkWindowSize();
window.addEventListener("resize", checkWindowSize);

function writeToXMLFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "time_visited.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var newElement, xmlDoc;
  const d = new Date();
  var txt = d.toTimeString();
  xmlDoc = xml.responseXML;
  console.log(txt);
  var newElement = xmlDoc.createElement("time");
  var newText = xmlDoc.createTextNode(txt);
  newElement.appendChild(newText);
  xmlDoc.getElementsByTagName("items")[0].appendChild(newElement);
}
writeToXMLFile();
// NAV OPEN AND CLOSE FUNCTIONS
function openNav() {
  document.getElementById("navLinks").style.height = "100%";
  document.getElementById("nav").style.height = "100%";
  root.style.setProperty("--transition-timing-nav", "cubic-bezier(0.3,0,0.25,1)");
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("navLinks").style.opacity = "1";
  document.getElementById("nav").style.opacity = "1";
}
function closeNav() {
  root.style.setProperty("--transition-timing-nav", "cubic-bezier(.7,-0.5,0.65,0.75)");
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("navLinks").style.height = "0%";
  document.getElementById("nav").style.height = "0%";
}
function openPage(showPage,showCloseBtn,hidePage,hideCloseBtn) {
  document.getElementById(showPage).style.opacity = "1";
  document.getElementById(hidePage).style.opacity = "0";
  document.getElementById(showPage).style.display = "flex";
  document.getElementById(showPage).style.flexDirection = "column";
  document.getElementById(showPage).style.alignItems = "center";
  document.getElementById(showPage).style.justifyContent = "center";
  if (showPage == "nav") {
    document.getElementById(showPage).style.height = "100%";
    document.getElementById("navLinks").style.height = "100%";
  } else {
    document.getElementById(showPage).style.height = "100%";
  }
  if (hidePage == "nav") {
    document.getElementById(hidePage).style.height = "0%";
    document.getElementById("navLinks").style.height = "0%";
  } else {
    document.getElementById(hidePage).style.height = "0%";
  }
  document.getElementById(showCloseBtn).style.display = "block";
  document.getElementById(hideCloseBtn).style.display = "none";
}

// COPY TEXT
function copyText(value) {
  var copyText = document.getElementById("copyTxt");
  copyText.value = value;
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
}

// TOGGLE SETTINGS
function toggleOptions(id,type) {
  var checkBox = document.getElementById(id);
  if (checkBox.checked == true) {
    if (type == "darkMode") {
      console.log("checked!")
      setDarkMode = "yes";
    } else if (type == "glowEffect") {
      console.log("checked!")
      setGlowEffect = "yes";
    } else if (type == "smoothAnimations") {
      console.log("checked!")
      setAnimations = "yes";
    }
  } else {
    if (type == "darkMode") {
      console.log("unchecked.")
      setDarkMode = "no";
    } else if (type == "glowEffect") {
      console.log("unchecked.")
      setGlowEffect = "no";
    }
    else if (type == "smoothAnimations") {
      console.log("unchecked.")
      setAnimations = "no";
    }
  }
  checkChoices();
}
function saveOptions() { // Save Settings
  if (setDarkMode == "yes") {
    localStorage.setItem("darkMode", "yes");
  } else if (setDarkMode == "no") {
    localStorage.setItem("darkMode", "no");
  }
  if (setGlowEffect == "yes") {
    localStorage.setItem("glowEffect", "yes");
  } else if (setGlowEffect == "no") {
    localStorage.setItem("glowEffect", "no");
  }
  if (setAnimations == "yes") {
    localStorage.setItem("smoothAnimations", "yes");
  } else if (setAnimations == "no") {
    localStorage.setItem("smoothAnimations", "no");
  }
  if (setDarkMode != originalDarkModeChoice || setGlowEffect != ogGlowEffectChoice || setAnimations != ogAnimationChoice) {
    window.location.href = "";
  }
}
function checkChoices() { // Check if Changes Were Made in Settings
  if (setDarkMode != originalDarkModeChoice || setGlowEffect != ogGlowEffectChoice || setAnimations != ogAnimationChoice) {
    root.style.setProperty("--save-btn-color", "#8ab28a");
  } else {
    root.style.setProperty("--save-btn-color", "transparent");
  }
}

// Get the <span> element that closes the modal
var span = document.getElementById("welcomeClose");
var confirmSpan = document.getElementById("confirmClose");
let confirmModal = document.getElementById("confirm");
var adClose = document.getElementById("adClose");
let adModal = document.getElementById("advertiseModal");
function clearSaveData(confirm) {
  if (confirm == "confirm") {
    confirmModal.style.display = "block";
  } else {
    localStorage.clear();
    window.location.href = "";
  }
}
function openAdModal() {
  adModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  confirmModal.style.display = "none";
}
confirmSpan.onclick = function() {
  confirmModal.style.display = "none";
}
adClose.onclick = function() {
  adModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == confirmModal) {
    confirmModal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == adModal) {
    adModal.style.display = "none";
  }
}

// OPEN PAGES
function loadMusicPage() {
  closeNav();
  document.getElementById("homeNav").style.display = "block";
  document.getElementById("musicNav").style.display = "none";
  document.getElementById("music").style.height = "100%";
  document.getElementById("home").style.height = "0%";
  localStorage.setItem('currentPage','music');
}
function loadHomePage() {
  closeNav();
  document.getElementById("homeNav").style.display = "none";
  document.getElementById("musicNav").style.display = "block";
  document.getElementById("music").style.height = "0%";
  document.getElementById("home").style.height = "100%";
  localStorage.setItem('currentPage','home');
}

/*
// LOAD THE ARTICLES
function loadArticles() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {readArticleXMLData(this);}
  xhttp.open("GET", "/articles.xml");
  xhttp.send();
}
function readArticleXMLData(xml) {
  const xmlDoc = xml.responseXML;
  const data = xmlDoc.getElementsByTagName("item");
  let p = "";
  for (let i = 0; i < data.length; i++) {
    p += "<h2>" +
      data[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</h2><br><p>" +
      data[i].getElementsByTagName("intro")[0].childNodes[0].nodeValue +
      "</p><br><p>" +
      data[i].getElementsByTagName("body")[0].childNodes[0].nodeValue +
      "</p><br><br><p>" +
      data[i].getElementsByTagName("con")[0].childNodes[0].nodeValue +
      "</p><br><hr><br>";
  }
  document.getElementById("articlesFromXmlFile").innerHTML = p;
  document.getElementById("articles").style.paddingTop = "1.5vh";
}
*/
// LOAD THE NEWS
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
  //loadArticles();
}

// TOGGLE SETTINGS BUTTONS AFTER PAGE LOAD
let darkModeBtn = document.querySelector("#darkModeToggle");
let glowEffectBtn = document.querySelector("#glowToggle");
let smoothAniBtn = document.querySelector("#smoothAniToggle");
let darkModeLocalStorage = localStorage.getItem("darkMode");
let glowEffectlocalStorage = localStorage.getItem("glowEffect");
let smoothAnimationsLocalStorage = localStorage.getItem("smoothAnimations");
if (darkModeLocalStorage == "yes") {
  darkModeBtn.checked = true;
}
if (glowEffectlocalStorage == "yes") {
  glowEffectBtn.checked = true;
} else if (glowEffectlocalStorage == null || glowEffectlocalStorage == "") {
  localStorage.setItem("glowEffect", "yes");
  glowEffectBtn.checked = true;
}
if (smoothAnimationsLocalStorage == "yes") {
  smoothAniBtn.checked = true;
} else if (smoothAnimationsLocalStorage == null || smoothAnimationsLocalStorage == "") {
  localStorage.setItem("glowEffect", "yes");
  smoothAniBtn.checked = true;
}


// CHECK THAT PAGE HAS FINISHED LOADING, THAN GENERATE NEWS
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadNews();
  }
}

// Get the modal
var modal = document.getElementById("myModal");
let popupShown = localStorage.getItem("popup");
if (popupShown != "yes") {
  modal.style.display = "block";
  localStorage.setItem("popup", "yes");
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// DISPLAY IMAGE AFTER BODY LOADED
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