// Variables
const songs = ['Kandy','Selecta', 'Rage'];
let songIndex = 0;
loadSong(songs[songIndex]);

// Load Song Data
function loadSong(song) {
  musicAudio.src = `music/${song}.mp3`;
}

// Set Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  musicAudio.play();
}

// DOM Event Listeners
musicAudio.addEventListener('ended', nextSong);

// Music
toggleMusic.addEventListener('click', function() {
  if (toggleMusic.checked) {
    musicAudio.volume = 0.5;
  } else {
    musicAudio.volume = 0.0;
  }
  musicAudio.play();
});

// Buttons
shopBtn.addEventListener('click', function() {
  if (toggleSFX.checked) {
    menuAudio.volume = 0.5;
  } else {
    menuAudio.volume = 0.0;
  }
  menuAudio.currentTime = 0;
  menuAudio.play();
});
settingsBtn.addEventListener('click', function() {
  if (toggleSFX.checked) {
    menuAudio.volume = 0.5;
  } else {
    menuAudio.volume = 0.0;
  }
  menuAudio.currentTime = 0;
  menuAudio.play();
});
settingsCloseBtn.addEventListener('click', function() {
  if (toggleSFX.checked) {
    menuAudio.volume = 0.5;
  } else {
    menuAudio.volume = 0.0;
  }
  menuAudio.currentTime = 0;
  menuAudio.play();
});
shopCloseBtn.addEventListener('click', function() {
  if (toggleSFX.checked) {
    menuAudio.volume = 0.5;
  } else {
    menuAudio.volume = 0.0;
  }
  menuAudio.currentTime = 0;
  menuAudio.play();
});
clickerBtn.addEventListener('click', function() {
  if (toggleSFX.checked) {
    btnClickAudio.volume = 0.5;
  } else {
    btnClickAudio.volume = 0.0;
  }
  btnClickAudio.currentTime = 0;
  btnClickAudio.play();
});

// Toggle Switches
toggleSFX.addEventListener('click', function() {
  toggleOnAudio.volume = 1.0;
  toggleOffAudio.volume = 1.0;
  if (toggleSFX.checked) {
    toggleOnAudio.currentTime = 0;
    toggleOnAudio.play();
  } else {
    toggleOffAudio.currentTime = 0;
    toggleOffAudio.play();
  }
});
toggleMusic.addEventListener('click', function() {
  if (toggleSFX.checked) {
    toggleOnAudio.volume = 1.0;
    toggleOffAudio.volume = 1.0;
  } else {
    toggleOnAudio.volume = 0.0;
    toggleOffAudio.volume = 0.0;
  }
  if (toggleMusic.checked) {
    toggleOnAudio.currentTime = 0;
    toggleOnAudio.play();
  } else {
    toggleOffAudio.currentTime = 0;
    toggleOffAudio.play();
  }
});
toggleSaveData.addEventListener('click', function() {
  if (toggleSFX.checked) {
    toggleOnAudio.volume = 1.0;
    toggleOffAudio.volume = 1.0;
  } else {
    toggleOnAudio.volume = 0.0;
    toggleOffAudio.volume = 0.0;
  }
  if (toggleSaveData.checked) {
    toggleOnAudio.currentTime = 0;
    toggleOnAudio.play();
  } else {
    toggleOffAudio.currentTime = 0;
    toggleOffAudio.play();
  }
});