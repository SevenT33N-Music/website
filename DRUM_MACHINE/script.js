const keyboardKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
var currentMenu = 'menuOptions';
var showLetters = true;

function nav(action) {
  if (action == 'open') {
    document.getElementById("myNav").style.height = "100%";
    let menuBtn = document.getElementById("menuOpen");
    menuBtn.classList.remove("btn-press");
    menuBtn.offsetWidth;
    menuBtn.classList.add("btn-press");
  } else {
    document.getElementById("myNav").style.height = "0%";
    let menuBtn = document.getElementById("menuClose");
    menuBtn.classList.remove("btn-press");
    menuBtn.offsetWidth;
    menuBtn.classList.add("btn-press");
  }
}

function switchMenu(oldMenu, newMenu, oldClose, newClose) {
  if (oldMenu == 'back') {
    document.getElementById(currentMenu).style.display = 'none';
    document.getElementById('menuBack').style.display = 'none';
    document.getElementById('menuOptions').style.display = 'flex';
    document.getElementById('menuClose').style.display = 'block';
    currentMenu = 'menuOptions';
  } else {
    document.getElementById(oldMenu).style.display = 'none';
    document.getElementById(oldClose).style.display = 'none';
    document.getElementById(newMenu).style.display = 'flex';
    document.getElementById(newClose).style.display = 'block';
    currentMenu = newMenu;
    console.log(currentMenu);
  }
}

function toggleSetting(setting) {
  if (setting == 'letters') {
    if (showLetters == true) {
      showLetters = false;
      var btn;
      for (i = 0; i < keyboardKeys.length; i++) {
        btn = document.getElementById(keyboardKeys[i].toUpperCase());
        btn.innerHTML = '';
      }
    } else {
      showLetters = true;
      var btn;
      for (i = 0; i < keyboardKeys.length; i++) {
        btn = document.getElementById(keyboardKeys[i].toUpperCase());
        btn.innerHTML = keyboardKeys[i].toUpperCase();
      }
      console.log(showLetters);
    }
  }
}

function goHome() {
  window.location.href = '../'
}