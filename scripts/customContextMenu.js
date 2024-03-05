var menuDisplay = false;
var menuType = "";
var menuId = "contextMenu";

function switchToHome() {
  page = 'home';
  document.getElementById('homeSection').style.transition = 'all 0.35s ease';
  document.getElementById('homeSection').style.opacity = '1';
  document.getElementById('profile').style.height = '0vh';
  document.getElementById('profile').style.opacity = '0';
  document.getElementById('homePage').style.opacity = '1';
  document.getElementById('newsPage').style.opacity = '0';
  document.getElementById('newsPage').style.height = '0vh';
  document.getElementById('newsPage').style.marginTop = '-10vh';
}
function hidePages() {
  document.getElementById('homePage').style.opacity = '0';
  document.getElementById('homeSection').style.transition = 'all 0.35s ease';
  document.getElementById('homeSection').style.opacity = '0';
  document.getElementById('newsPage').style.opacity = '0';
  document.getElementById('newsPage').style.height = '0';
  document.getElementById('newsPage').style.marginTop = '-10vh';
  document.getElementById('profile').style.transition = 'all 0.35s ease';
  document.getElementById('profile').style.opacity = '0';
  document.getElementById('profile').style.height = '0';
}

function createContextMenu(e, id) {
  let menu = document.createElement('div');
  menu.id = id;
  menu.classList.add('context-menu-container');
  if (e.pageY > window.innerHeight - 175) {
    menu.style.top = `${e.pageY-140}px`;
  }
  else {
    menu.style.top = `${e.pageY-10}px`;
  }
  if (e.pageX > window.innerWidth - 175) {
    menu.style.left = `${e.pageX-150}px`;
  }
  else {
    menu.style.left = `${e.pageX}px`;
  }
  if (menuType == "user button") {
    let clickerItem = document.createElement('div');
    clickerItem.innerText = 'Clicker Game';
    clickerItem.classList.add('context-menu-option');
    clickerItem.onclick = function() {
      window.location.href = "/CLICKER/";
    }
    let drumMachineItem = document.createElement('div');
    drumMachineItem.innerText = 'Drum Machine';
    drumMachineItem.classList.add('context-menu-option');
    drumMachineItem.onclick = function() {
      window.location.href = "/DRUM_MACHINE/";
    }
    if (page == "profile") {
      let homeItem = document.createElement('div');
      homeItem.classList.add('context-menu-option');
      homeItem.innerText = 'Open Home';
      homeItem.onclick = function() {
        switchToHome();
      }
      menu.appendChild(homeItem);
    }
    else {
      let profileItem = document.createElement('div');
      profileItem.classList.add('context-menu-option');
      profileItem.innerText = 'Profile';
      profileItem.onclick = function() {
        page = 'profile';
        document.getElementById('homePage').style.opacity = '1';
        document.getElementById('homeSection').style.transition = 'all 0.35s ease';
        document.getElementById('homeSection').style.opacity = '0';
        document.getElementById('newsPage').style.opacity = '0';
        document.getElementById('newsPage').style.height = '0vh';
        document.getElementById('newsPage').style.marginTop = '-10vh';
        document.getElementById('profile').style.transition = 'all 0.35s ease';
        document.getElementById('profile').style.opacity = '1';
        document.getElementById('profile').style.height = '88vh';
        document.getElementById('profile').style.marginTop = '0vh';
      }
      menu.appendChild(profileItem);
    }
    if (page == 'news') {
      let homeItem = document.createElement('div');
      homeItem.classList.add('context-menu-option');
      homeItem.innerText = 'Open Home';
      homeItem.onclick = function() {
        switchToHome();
      }
      menu.appendChild(homeItem);
    }
    else {
      let newsItem = document.createElement('div');
      newsItem.classList.add('context-menu-option');
      newsItem.innerText = 'News';
      newsItem.onclick = function() {
        page = 'news';
        hidePages();
        document.getElementById('newsPage').style.opacity = '1';
        document.getElementById('newsPage').style.height = '100vh';
        document.getElementById('newsPage').style.marginTop = '0vh';
      }
      menu.appendChild(newsItem);
    }
    menu.appendChild(clickerItem);
    menu.appendChild(drumMachineItem);
  }
  if (menuType == "cover button") {
    let playItem = document.createElement('div');
    let shareItem = document.createElement('div');
    playItem.classList.add('context-menu-option');
    shareItem.classList.add('context-menu-option');
    playItem.innerText = 'Play Song';
    shareItem.innerText = 'Share Song';
    menu.appendChild(playItem);
    menu.appendChild(shareItem);
  }
  if (menuType == "no options") {
    let noOptionsItem = document.createElement('div');
    noOptionsItem.innerText = 'No options available';
    noOptionsItem.style = `display:inline-flex;flex-direction:column;justify-content:center;align-items:center;height:5vh;min-height:100px;max-height:200px;width:100%;text-align:center`;
    menu.appendChild(noOptionsItem);
  }
  menuDisplay = true;
  document.getElementById('body').appendChild(menu);
}

/*document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  if (!menuDisplay) {
    createContextMenu(e, menuId);
  } else {
    let menu = document.getElementById(menuId);
    document.getElementById('body').removeChild(menu);
    createContextMenu(e, menuId);
  }
}, false);*/
let covers = document.querySelectorAll(".card");
for (i = 0; i < covers.length; i++) {
  covers[i].addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menuType = 'cover button';
    if (!menuDisplay) {
      createContextMenu(e, menuId);
    } else {
      let menu = document.getElementById(menuId);
      document.getElementById('body').removeChild(menu);
      createContextMenu(e, menuId);
    }
  }, false);
}
document.getElementById('userBtn').addEventListener('contextmenu', function(e) {
  e.preventDefault();
  menuType = 'user button';
  if (!menuDisplay) {
    createContextMenu(e, menuId);
  } else {
    let menu = document.getElementById(menuId);
    document.getElementById('body').removeChild(menu);
    createContextMenu(e, menuId);
  }
}, false);
/*document.getElementById('homePage').addEventListener('contextmenu', function(e) {
  e.preventDefault();
  menuType = 'no options';
  if (!menuDisplay) {
    createContextMenu(e, menuId);
  } else {
    let menu = document.getElementById(menuId);
    document.getElementById('body').removeChild(menu);
    createContextMenu(e, menuId);
  }
}, false);*/
document.getElementById("body").addEventListener('click', function() {
  if (menuDisplay) {
    let menu = document.getElementById(menuId);
    document.getElementById('body').removeChild(menu);
    menuDisplay = false;
  }
});