// DOM Variables
const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("searchIcon");
var root = document.querySelector(':root');
var transDurCalc = 0;

// Check if Faves Save Has Been Created
if (localStorage.getItem("saveFave") == null) {
  localStorage.setItem("saveFave", "true");
}

// All Songs
const realLove = {
  song: ['Twilight', 'Together', 'Into Darkness (C Major)', 'Close Call'],
  cover: ['RealLove', 'RealLove', 'RealLove', 'RealLove'],
  artist: ['SevenT33N', 'SevenT33N', 'SevenT33N', 'SevenT33N'],
  description: "Real Love is an album that shares the pain and victories of love. I made it as a way to move on from previous pains I've experienced."
};
const loveHeartbreakRepeat = {
  song: ['Spirit', 'Mekayla (Heartbreak Remix)', 'Healing'],
  cover: ['loveHeartbreakRepeat', 'loveHeartbreakRepeat', 'loveHeartbreakRepeat'],
  artist: ['SevenT33N', 'SevenT33N', 'SevenT33N']
}
const wasted = {
  song: ['Skill Issue', 'Trust Issues', 'Prime', 'Dirt', 'Sun'],
  cover: ['WASTED', 'WASTED', 'WASTED', 'WASTED', 'WASTED'],
  artist: ['SevenT33N', 'SevenT33N', 'SevenT33N', 'SevenT33N', 'SevenT33N']
}
const brixton = {
  song: ['Brixton', 'Broken', 'Drop'],
  cover: ['brixton', 'brixton', 'brixton'],
  artist: ['SevenT33N', 'SevenT33N', 'SevenT33N']
}
const singles = {
  song: ['Kandy', 'Love Reggaeton'],
  cover: ['Placeholder', 'loveReggaeton'],
  artist: ['SevenT33N', 'SevenT33N']
}

// Menus
function searchMenu(action) {
  if (action == 'open') {
    searchInput.focus({ focusVisible: true });
    searchIcon.style.marginLeft = '0';
  } else if (action == 'close') {
    searchInput.blur();
    searchIcon.style.marginLeft = '2%';
  }
}
function navMenu(action) {
  if (action == 'open') {
    document.getElementById("nav").style.width = "100%";
  } else if (action == 'close') {
    document.getElementById("nav").style.width = "0%";
  }
}

// Alerts
function alertUser(message) {
  alert(message);
}

// Open Music Page
function openMusicPlayer(sharing, album = 'singles', index = '0') {
  window.location.href = `/musicplayer.html?share=${sharing}&album=${album}&songIdx=${index}`;
}

// Event Listeners
searchInput.addEventListener("focusout", function() {
  searchMenu('close');
});
document.addEventListener("readystatechange", function(event) {
  if (event.target.readyState == "complete") {
    searchIcon.style.transition = "all 0.4s ease-in-out";
    transDurCalc = Math.round(((window.innerWidth / 1250) + Number.EPSILON) * 100) / 100;
    //transDurCalc = Math.round(((window.innerWidth / screen.width) + Number.EPSILON) * 100) / 100;
    root.style.setProperty('--trans-dur', `${transDurCalc}s`);
    console.log(`Calculated Transition Duration: ${transDurCalc}`);
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let inputVal = searchInput.value;
    if (inputVal.length > 0) {
      window.location.href = `/search.html?q=${inputVal}`;
    }
  }
});
window.addEventListener('resize', function() {
  transDurCalc = Math.round(((window.innerWidth / screen.width) + Number.EPSILON) * 100) / 100;
  console.log(`Calculated Transition Duration: ${transDurCalc}`);
  root.style.setProperty('--trans-dur', `${transDurCalc}s`);
});