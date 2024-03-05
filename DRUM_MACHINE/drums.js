const audioQ = document.getElementById('q');
const audioW = document.getElementById('w');
const audioE = document.getElementById('e');
const audioA = document.getElementById('a');
const audioS = document.getElementById('s');
const audioD = document.getElementById('d');
const audioZ = document.getElementById('z');
const audioX = document.getElementById('x');
const audioC = document.getElementById('c');
var drumBtns = document.querySelectorAll('.drum-btn');
var currentKit = 'drill';
// Default: tom1, tom2, tom3, crash, openHat, closedHat, Kick, rimshot, Snare
const drillKit = ['bass', 'toms', 'toms', 'bass', 'hats', 'hats', 'kick', 'snare', 'snare'];
const hiphopKit = ['bass', 'toms', 'toms', 'kick', 'hats', 'hats', 'kick', 'snare', 'snare'];
const jazzKit = ['snare', 'toms', 'toms', 'hats', 'hats', 'hats', 'kick', 'snare', 'snare'];
const reggaetonKit = ['hats', 'hats', 'snare', 'snare', 'hats', 'hats', 'kick', 'snare', 'snare'];

function updateColors(newKit) {
  drumBtns = document.querySelectorAll('.drum-btn');
  for (i = 0; i < drumBtns.length; i++) {
    drumBtns[i].classList.remove('toms');
    drumBtns[i].classList.remove('bass');
    drumBtns[i].classList.remove('hats');
    drumBtns[i].classList.remove('kick');
    drumBtns[i].classList.remove('snare');
  }
  if (newKit == 'drill') {
    for (i = 0; i < drumBtns.length; i++) {
      drumBtns[i].classList.add(drillKit[i]);
    }
  }
  else if (newKit == 'hiphop') {
    for (i = 0; i < drumBtns.length; i++) {
      drumBtns[i].classList.add(hiphopKit[i]);
    }
  }
  else if (newKit == 'jazz') {
    for (i = 0; i < drumBtns.length; i++) {
      drumBtns[i].classList.add(jazzKit[i]);
    }
  }
  else if (newKit == 'reggaeton') {
    for (i = 0; i < drumBtns.length; i++) {
      drumBtns[i].classList.add(reggaetonKit[i]);
    }
  }
  switchMenu('back', 'menuBack', 'menuOptions', 'menuClose');
  nav('close');
}

function changeDrumKit(kit) {
  audioQ.src = `audio/${kit}/tom1.wav`;
  audioW.src = `audio/${kit}/tom2.wav`;
  audioE.src = `audio/${kit}/tom3.wav`;
  audioA.src = `audio/${kit}/crash.wav`;
  audioS.src = `audio/${kit}/openHat.wav`;
  audioD.src = `audio/${kit}/closedHat.wav`;
  audioZ.src = `audio/${kit}/kick.wav`;
  audioX.src = `audio/${kit}/rimshot.wav`;
  audioC.src = `audio/${kit}/snare.wav`;
  updateColors(kit);
}

function playSound(drumBtn, keypress = false) {
  let audio = document.getElementById(drumBtn.toLowerCase());
  let btn = document.getElementById(drumBtn.toUpperCase());
  audio.currentTime = 0;
  audio.play();
  if (keypress == true) {
    btn.classList.remove("btn-press");
    btn.offsetWidth;
    btn.classList.add("btn-press");
  }
}

document.addEventListener('keydown', function(e) {
  if (keyboardKeys.includes(e.key)) {
    playSound(e.key, true);
  }
});
document.addEventListener('keyup', function(e) {
  if (keyboardKeys.includes(e.key)) {
    let btn = document.getElementById(e.key.toUpperCase());
    btn.blur();
  }
})