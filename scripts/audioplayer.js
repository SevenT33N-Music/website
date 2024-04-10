// ===== Variables ===== //

// DOM Variables
const pageTitle = document.getElementById("pageTitle");
const shareBtn = document.getElementById("shareBtn");
const playBtn = document.getElementById("playBtn");
const skipBtn = document.getElementById("skipBtn");
const prevBtn = document.getElementById("prevBtn");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const songCover = document.getElementById("songCover");
var songAudio = document.getElementById("audio");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const currentTime = document.getElementById('currentTime');
const fullTime = document.getElementById('fullTime');
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const musicPlayerContainer = document.getElementById('musicPlayerContainer');
const progressLoaded = document.getElementById('progressLoaded');
const bassSlider = document.getElementById('bassSlider');
const midSlider = document.getElementById('midSlider');
const trebleSlider = document.getElementById('trebleSlider');
const bassDisplay = document.getElementById('bassNum');
const midDisplay = document.getElementById('midNum');
const trebleDisplay = document.getElementById('trebleNum');
const eqToggle = document.getElementById('audioEqCheckbox');
let r = document.querySelector(':root');
// Song Variables
let songIndex = 0;
let maxIndex = 0;
let albumIndex = null;
let currentAlbum = null;
let currentSong = null;
let repeatType = 'none';
let explicitE = '🅴';
let recentSongs = localStorage.getItem('recentSongs');
if (recentSongs == null) {
  recentSongs = [];
} else {
  recentSongs = JSON.parse(recentSongs);
}
let allAudioTracks = [];

/* ==== EQ Variables ==== */
var doAudioEQ = false;
var bass = 0.0;
var mid = 0.0;
var treble = 0.0;
var bassFilter;
var midFilter;
var trebleFilter;
var context = null;

var saveEQData = [];
var savedEQ = localStorage.getItem('EQ');
if (savedEQ == null) {
  saveEQData.push(bass);
  saveEQData.push(mid);
  saveEQData.push(treble);
  saveEQData = JSON.stringify(saveEQData);
  localStorage.setItem('EQ', saveEQData);
  saveEQData = JSON.parse(saveEQData);
}
else {
  savedEQ = JSON.parse(savedEQ);
  bass = savedEQ[0];
  mid = savedEQ[1];
  treble = savedEQ[2];
}

// ===== Song Data ===== //
var playlist = {
  song: [],
  cover: [],
  artist: [],
  album: '',
  coverSize: '500x500'
}
let shareCheck = checkShare();
var shareData = {
  title: `SevenT33N Music`,
  text: `Listen To "Kandy" by "SevenT33N"`,
  url: `${window.location.href}`,
}

// ===== Load Song Data ===== //
function createSources(playlistLength = 0, playlistGroup = 'singles') {
  for (i = 0; i < playlistLength; i++) {
    let sourceEle = document.createElement('source');
    sourceEle.src = playlist.song[i];
    sourceEle.type = 'audio/mpeg';
    //sourceEle.mediaGroup = playlistGroup;
    sourceEle.preload = 'auto';
    let audioEle = document.createElement('audio');
    audioEle.id = `audio${i}`;
    audioEle.preload = 'auto';
    audioEle.appendChild(sourceEle);
    let audioContainer = document.getElementById('audioContainer');
    audioContainer.appendChild(audioEle);
  }
}
function selectSong(album = "singles", idx = 0, fromCard = false, forceSongSelect = "none") {
  if (forceSongSelect == "none") {
    if (!fromCard) {
      continueWithSongSelection(album, idx);
    }
    else if (fromCard && canClick) {
      continueWithSongSelection(album, idx);
    }
  }
  else if (playlist.song.length > 0) {
    let findSong = playlist.song.indexOf(forceSongSelect);
    if (findSong != -1) {
      if (!fromCard) {
        continueWithSongSelection(album, findSong);
      } 
      else if (fromCard && canClick) {
        continueWithSongSelection(album, findSong);
      }
    } 
    else {
      if (idx > singles.song.length - 1) {
        continueWithSongSelection('singles', '0');
      }
      else {
        continueWithSongSelection('singles', idx);
      }
    }
  }
  else {
    if (!fromCard) {
      continueWithSongSelection(album, idx);
    } else if (fromCard && canClick) {
      continueWithSongSelection(album, idx);
    }
  }
}
function loadAlbum(album) {
  try {
    for (i = 0; i < playlist.song.length; i++) {
      let oldAudioEle = document.getElementById(`source${i}`);
      oldAudioEle.remove();
    }
  }
  catch {
    console.log("No Audio Elements Created.");
  }
  if (album == "singles") {
    currentAlbum = "singles";
    playlist.song = singles.song;
    playlist.cover = singles.cover;
    playlist.artist = singles.artist;
    playlist.coverSize = singles.coverSize[songIndex];
    playlist.album = 'Singles';
    maxIndex = 2;
  }
  if (album == "brixton") {
    currentAlbum = "brixton";
    playlist.song = brixton.song;
    playlist.cover = brixton.cover;
    playlist.artist = brixton.artist;
    playlist.coverSize = brixton.coverSize[0];
    playlist.album = 'Brixton';
    maxIndex = 2;
  }
  if (album == "wasted") {
    currentAlbum = "wasted";
    playlist.song = wasted.song;
    playlist.cover = wasted.cover;
    playlist.artist = wasted.artist;
    playlist.coverSize = wasted.coverSize[0];
    playlist.album = 'WASTED';
    
    maxIndex = 4;
  }
  if (album == "realLove") {
    currentAlbum = "realLove";
    playlist.song = realLove.song;
    playlist.cover = realLove.cover;
    playlist.artist = realLove.artist;
    playlist.coverSize = realLove.coverSize[0];
    playlist.album = 'Real Love';
    maxIndex = 3;
  }
  if (album == "remixes") {
    currentAlbum = "remixes";
    playlist.song = remixes.song;
    playlist.cover = remixes.cover;
    playlist.artist = remixes.artist;
    playlist.coverSize = remixes.coverSize[songIndex];
    playlist.album = 'Remixes';
    maxIndex = 1;
  }
  createSources(maxIndex, album);
}
function continueWithSongSelection(album, idx) {
  if (mobileUser) {
    document.getElementById("musicPlayerContainer").classList.add("mobile");
    //root.style.setProperty("--mobile-btn", "block");
  }
  if (document.getElementById('musicPlayerContainer').classList.contains('fade-player')) {
    document.getElementById('musicPlayerContainer').classList.remove('fade-player');
  }
  playBtn.innerHTML = pauseSvg;
  loadAlbum(album);
  if (idx > maxIndex || idx < 0) {
    songIndex = 0;
  } else {
    songIndex = idx;
  }
  loadSong();
}
function loadSong(closeTheModal = false) {
  if (closeTheModal) {
    document.getElementById('musicPlayerContainer').classList.remove('fade-player');
    closeModal();
  }
  currentTime.innerHTML = '-:--';
  fullTime.innerHTML = '-:--';
  var song = "Kaitlyn";
  var cover = 'images/Kaitlyn.jpg';
  var artist = "SevenT33N";
  var album = "singles";
  var coverSize = '500x500';
  song = playlist.song[songIndex];
  cover = playlist.cover[songIndex];
  artist = playlist.artist[songIndex];
  album = playlist.album;
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: playlist.song[songIndex],
      artist: playlist.artist[songIndex],
      album: playlist.album,
      artwork: [
        {src: `images/${cover}.jpg`}
      ]
    });
  }
  if (playlist.album == 'Singles' || playlist.album == 'Remixes') {
    coverSize = playlist.coverSize[songIndex];
  } else {
    coverSize = playlist.coverSize[0];
  }
  songTitle.innerHTML = song;
  songArtist.innerHTML = artist;
  songAudio.src = `audio/${song}.mp3`;
  songCover.src = `images/${cover}.jpg`;
  currentSong = song;
  /*
  if (recentSongs.includes(currentSong) == false) {
    if (recentSongs.length > 4) {
      recentSongs = recentSongs.slice(1, 5);
    } else {
      recentSongs.push(currentSong);
    }
    console.log(recentSongs);
    localStorage.setItem('recentSongs', JSON.stringify(recentSongs));
  }
  if (!eqCreated) {
    setEQ();
    eqCreated = true;
  } else {
    playSong();
  }
  */
  setEQ();
}

// ===== Action Functions ===== //
function closeModal(showMessage = false) {
  document.getElementById("shareModal").style.transition = "opacity 0.75s ease, top 1.5s ease";
  document.getElementById("shareModal").style.top = "-100%";
  document.getElementById("shareModal").style.opacity = "0";
  if (showMessage == true) {
    showNotification(5000, true);
  }
}
function checkFadedPlayer() {
  const fadedPlayer = document.getElementById('musicPlayerContainer').classList.contains('fade-player');
  if (!fadedPlayer) {
    return true;
  } else {
    return false;
  }
}
function checkShare() {
  const songParams = new URLSearchParams(window.location.search);
  let songName = songParams.get('song');
  let songCover = songParams.get('cover');
  let songArtist = songParams.get('artist');
  if (songName != null && songCover != null && songArtist != null) {
    playlist.song = [songName];
    playlist.cover = [songCover];
    playlist.artist = [songArtist];
    songIndex = 0;
    maxIndex = 0;
    return true;
  } else {
    return false;
  }
}
function playSong() {
  document.getElementById('playingVisual').style.transition = 'opacity 0.3s ease';
  document.getElementById('playingVisual').style.opacity = '1';
  songAudio.classList.add('play');
  playBtn.innerHTML = pauseSvg;
  pageTitle.innerHTML = `SevenT33N Music | Playing "${currentSong}"`;
  //let audioIdStr = `audio${songIndex}`;
  //let audioEle = document.getElementById(audioIdStr);
  //audioEle.play();
  songAudio.play();
}
function pauseSong() {
  document.getElementById('playingVisual').style.transition = 'opacity 0.15s ease';
  document.getElementById('playingVisual').style.opacity = '0';
  songAudio.classList.remove('play');
  playBtn.innerHTML = playSvg;
  pageTitle.innerHTML = `SevenT33N Music | Music Paused`;
  //let audioIdStr = `audio${songIndex}`;
  //let audioEle = document.getElementById(audioIdStr);
  //audioEle.pause();
  songAudio.pause();
}
function nextSong(btnClick = false) {
  const runCode = checkFadedPlayer();
  if (runCode) {
    if (btnClick == true) {
      songIndex++;
      if (songIndex > maxIndex) {
        songIndex = 0;
      }
      loadSong();
    }
    else if (repeatType == "single") {
      audio.currentTime = 0;
      playSong();
    }
    else if (repeatType == "playlist") {
      songIndex++;
      if (songIndex > maxIndex) {
        songIndex = 0;
      }
      loadSong();
    } 
    else if (repeatType == "none") {
      if (songIndex + 1 > maxIndex) {
        console.log("Finished Playing");
        musicPlayerContainer.classList.add('fade-player');
      }
      else {
        songIndex++;
        loadSong();
      }
    }
  }
}
function prevSong() {
  const runCode = checkFadedPlayer();
  if (runCode) {
    songIndex--;
    if (songIndex < 0) {
      songIndex = maxIndex;
    }
    loadSong();
  }
}
function shufflePlaylist() {
  const runCode = checkFadedPlayer();
  if (runCode) {
    let songTitles = playlist.song;
    let songCovers = playlist.cover;
    let songArtists = playlist.artist;
    let currentIndex = songTitles.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [songTitles[currentIndex], songTitles[randomIndex]] = [songTitles[randomIndex], songTitles[currentIndex]];
      [songCovers[currentIndex], songCovers[randomIndex]] = [songCovers[randomIndex], songCovers[currentIndex]];
      [songArtists[currentIndex], songArtists[randomIndex]] = [songArtists[randomIndex], songArtists[currentIndex]];
    }
    playlist.song = songTitles;
    playlist.cover = songCovers;
    playlist.artist = songArtists;
    songIndex = 0;
    loadSong();
  }
}
function repeatSong() {
  const runCode = checkFadedPlayer();
  if (runCode) {
    if (repeatType == 'none') {
      repeatType = "playlist";
      repeatBtn.classList.add('btn-on');
      repeatBtn.classList.remove('repeat-song');
    }
    else if (repeatType == "playlist") {
      repeatType = "single";
      repeatBtn.classList.add('btn-on');
      repeatBtn.classList.add('repeat-song');
    }
    else {
      repeatType = "none";
      repeatBtn.classList.remove('btn-on');
      repeatBtn.classList.remove('repeat-song');
    }
  }
}
function shareSong() {
  const runCode = checkFadedPlayer();
  if (runCode) {
    var link;
    if (window.location.href.includes('github.io')) {
      link = 'https://sevent33n-music.github.io/';
    }
    else {
      link = window.location.href;
    }
    let songName = playlist.song[songIndex];
    let songCover = playlist.cover[songIndex];
    let songArtist = playlist.artist[songIndex];
    link += `?album=${currentAlbum}&song=${songName}&cover=${songCover}&artist=${songArtist}`;
    var copyText = document.getElementById("copytextInput");
    copyText.value = link;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    showNotification(5000, false, true);
  }
}
function togglePlayPause() {
  const isPlaying = audio.classList.contains('play');
  const fadedPlayer = document.getElementById('musicPlayerContainer').classList.contains('fade-player');
  if (!fadedPlayer) {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }
}
function disconnectEQ() {
  // Disconnect bass filter
  try {
    bassFilter.disconnect();
  }
  catch {
    console.log('No Bass Filter to Disconnect.');
  }
  // disconnect mid filter
  try {
    midFilter.disconnect();
  }
  catch {
    console.log('No Mid Filter to Disconnect.');
  }
  // disconnect treble filter
  try {
    trebleFilter.disconnect();
  }
  catch {
    console.log('No Treble Filter to Disconnect.');
  }
}
function setEQ(doSong = true, checkVal3 = false, val3 = false) {
  //console.log(`Bass: ${bass}, Mid: ${mid}, Treble: ${treble}`);
  if (checkVal3) {
    if (val3) {
      doAudioEQ = true;
    }
    else {
      doAudioEQ = false;
    }
  }
  if (doAudioEQ) {
    if (context == null) {
      context = new AudioContext();
      source = context.createMediaElementSource(songAudio);
      gainNode = context.createGain();
      console.log("Audio Context Created.");
    }
    disconnectEQ();
    trebleFilter = context.createBiquadFilter();
    midFilter = context.createBiquadFilter();
    bassFilter = context.createBiquadFilter();
    trebleFilter.type = "highshelf";
    trebleFilter.frequency.value = 2000;
    trebleFilter.gain.value = treble;
    bassFilter.type = "lowshelf"; 
    bassFilter.frequency.value = 250;
    bassFilter.gain.value = bass;
    midFilter.type = "peaking";
    midFilter.gain.value = mid;
    midFilter.Q.value = 2;
    source.connect(bassFilter); 
    bassFilter.connect(midFilter);
    midFilter.connect(trebleFilter);
    trebleFilter.connect(context.destination);
  }
  else {
    disconnectEQ();
    console.log("Removed EQ.");
    try {
      context.close().then(() => {
        console.log("Audio Context Closed.");
      });
    }
    catch {
      console.log('No Audio Context to Close.');
    }
  }
  if (doSong) {
    playSong();
  }
}

// ===== Update Data ===== //
function updateProgress() {
  const duration = songAudio.duration;
  const curTime = songAudio.currentTime;
  const progressPercent = (curTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  if (songAudio.readyState > 0) {
    let loadedTime = songAudio.buffered.end(0);
    r.style.setProperty('--music-player-loaded-width', `${loadedTime}%`)
    let time = calculateTime(curTime);
    let totalTime = calculateTime(duration);
    currentTime.innerHTML = `${time}`;
    fullTime.innerHTML = `${totalTime}`;
  } else {
    currentTime.innerHTML = '-:--';
    fullTime.innerHTML = '-:--';
  }
}
function calculateTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
function formatCount(count, decimals = 2) {
  const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  return result;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = songAudio.duration;
  let newCurrentTime = Math.round((clickX / width) * duration);
  console.log(newCurrentTime);
  songAudio.currentTime = newCurrentTime;
}

// ===== Event Listeners ===== //
shareBtn.addEventListener("click", async () => {
  const runCode = checkFadedPlayer();
  if (runCode) {
    try {
      var link;
      if (window.location.href.includes('github.io')) {
        link = 'https://sevent33n-music.github.io/';
      }
      else {
        link = window.location.href;
      }
      let songName = playlist.song[songIndex];
      let songCover = playlist.cover[songIndex];
      let songArtist = playlist.artist[songIndex];
      link += `?album=${currentAlbum}&song=${songName}&cover=${songCover}&artist=${songArtist}`;
      shareData.url = link;
      shareData.title = `SevenT33N Music`;
      shareData.text = `Listen to "${songName}" by ${songArtist}`;
      await navigator.share(shareData);
      showNotification(5000, false, true);
    }
    catch (err) {
      console.log(`Error: ${err}`);
      shareSong();
    }
  }
});
progressContainer.addEventListener('click', setProgress);
playBtn.addEventListener('click', togglePlayPause);
songAudio.addEventListener('timeupdate', function() {
  updateProgress();
});
songAudio.addEventListener('ended', nextSong);
songAudio.addEventListener('playing', () => {
  navigator.mediaSession.setActionHandler("nexttrack", function() {
    nextSong();
  });
  navigator.mediaSession.setActionHandler("previoustrack", function() {
    prevSong();
  });
  navigator.mediaSession.setActionHandler("play", function() {
    togglePlayPause();
  });
  navigator.mediaSession.setActionHandler("pause", function() {
    togglePlayPause();
  });
});
prevBtn.addEventListener('click', prevSong);
skipBtn.addEventListener('click', function() {
  nextSong(true);
});
shuffleBtn.addEventListener('click', shufflePlaylist);
repeatBtn.addEventListener('click', repeatSong);
bassSlider.addEventListener('input', function() {
  let numToDisplay = bassSlider.value / 5;
  numToDisplay = numToDisplay.toString().slice(0,5);
  bassDisplay.innerHTML = `Low Shelf (Bass): ${numToDisplay}x`;
  bass = bassSlider.value / 5;
  setEQ(false);
});
midSlider.addEventListener('input', function() {
  let numToDisplay = midSlider.value / 5;
  numToDisplay = numToDisplay.toString().slice(0,5);
  midDisplay.innerHTML = `Peaking (Mid): ${numToDisplay}x`;
  mid = midSlider.value / 5;
  setEQ(false);
});
trebleSlider.addEventListener('input', function() {
  let numToDisplay = trebleSlider.value / 5;
  numToDisplay = numToDisplay.toString().slice(0,5);
  trebleDisplay.innerHTML = `High Shelf (Treble): ${numToDisplay}x`;
  treble = trebleSlider.value / 5;
  setEQ(false);
});
if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("nexttrack", function() {
    nextSong();
  });
  navigator.mediaSession.setActionHandler("previoustrack", function() {
    prevSong();
  });
  navigator.mediaSession.setActionHandler("play", function() {
    togglePlayPause();
  });
  navigator.mediaSession.setActionHandler("pause", function() {
    togglePlayPause();
  });
}