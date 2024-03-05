// ===== Variables ===== //

// DOM Variables
const pageTitle = document.getElementById("pageTitle");
const playBtn = document.getElementById("playBtn");
const skipBtn = document.getElementById("skipBtn");
const prevBtn = document.getElementById("prevBtn");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const songCover = document.getElementById("songCover");
const songAudio = document.getElementById("audio");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const currentTime = document.getElementById('currentTime');
const fullTime = document.getElementById('fullTime');
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const musicPlayerContainer = document.getElementById('musicPlayerContainer');
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


// ===== Song Data ===== //
var playlist = {
  song: [],
  cover: [],
  artist: []
}
let shareCheck = checkShare();

// ===== Load Song Data ===== //
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
  if (album == "singles") {
    currentAlbum = "singles";
    playlist.song = singles.song;
    playlist.cover = singles.cover;
    playlist.artist = singles.artist;
    maxIndex = 2;
  }
  if (album == "brixton") {
    currentAlbum = "brixton";
    playlist.song = brixton.song;
    playlist.cover = brixton.cover;
    playlist.artist = brixton.artist;
    maxIndex = 2;
  }
  if (album == "wasted") {
    currentAlbum = "wasted";
    playlist.song = wasted.song;
    playlist.cover = wasted.cover;
    playlist.artist = wasted.artist;
    maxIndex = 4;
  }
  if (album == "realLove") {
    currentAlbum = "realLove";
    playlist.song = realLove.song;
    playlist.cover = realLove.cover;
    playlist.artist = realLove.artist;
    maxIndex = 3;
  }
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
  song = playlist.song[songIndex];
  cover = playlist.cover[songIndex];
  artist = playlist.artist[songIndex];
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
  */
  playSong();
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
  audio.classList.add('play');
  playBtn.innerHTML = pauseSvg;
  audio.play();
  pageTitle.innerHTML = `SevenT33N Music | Playing "${currentSong}"`;
}
function pauseSong() {
  document.getElementById('playingVisual').style.transition = 'opacity 0.15s ease';
  document.getElementById('playingVisual').style.opacity = '0';
  audio.classList.remove('play');
  playBtn.innerHTML = playSvg;
  audio.pause();
  pageTitle.innerHTML = `SevenT33N Music | Music Paused`;
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
      audio.play();
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
    } else if (repeatType == "playlist") {
      repeatType = "single";
      repeatBtn.classList.add('btn-on');
      repeatBtn.classList.add('repeat-song');
    } else {
      repeatType = "none";
      repeatBtn.classList.remove('btn-on');
      repeatBtn.classList.remove('repeat-song');
    }
  }
}
function shareSong() {
  const runCode = checkFadedPlayer();
  if (runCode) {
    let link = window.location.href;
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

// ===== Update Data ===== //
function updateProgress() {
  const duration = songAudio.duration;
  const curTime = songAudio.currentTime;
  const progressPercent = (curTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  if (songAudio.readyState > 0) {
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

// ===== Event Listeners ===== //
playBtn.addEventListener('click', function() {
  const isPlaying = audio.classList.contains('play');
  const fadedPlayer = document.getElementById('musicPlayerContainer').classList.contains('fade-player');
  if (!fadedPlayer) {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }
});
songAudio.addEventListener('timeupdate', function() {
  updateProgress();
});
songAudio.addEventListener('ended', nextSong);
prevBtn.addEventListener('click', prevSong);
skipBtn.addEventListener('click', function() {
  nextSong(true);
});
shuffleBtn.addEventListener('click', shufflePlaylist);
repeatBtn.addEventListener('click', repeatSong);