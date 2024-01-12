//let pageFix = document.createElement("a");
//pageFix.href = "#musicPage";
//pageFix.style.display = "none";
//pageFix.click();

// DOM Variables
const pageTitle = document.getElementById("pageTitle");
const musicContainer = document.getElementById('musicPage');
const playBtn = document.getElementById("play");
const skipBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const songArtist = document.getElementById("artist");
const songTitle = document.getElementById("songTitle");
const songCover = document.getElementById("songCover");
const songAudio = document.getElementById("audio");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const favStar = document.getElementById("favStar");
const favTxt = document.getElementById("favTxt");

// Song Variables
let songIndex = 0;
let maxIndex = 0;
let albumIndex = null;
let selectedAlbum = null;
let currentSong = null;

// Share Variables
let link = '';
let linkShare = 'false';

// Create Fav Playlist
const favoritesPlaylist = {
  song: [],
  cover: [],
  artists: []
}
// Load Content into Favs Playlist
function loadFavorites() {
  var itemAdd;
  for (let i = 0; i <= realLove.song.length; i++) {
    let idx = i - 1;
    if (localStorage.getItem(realLove.song[idx]) == 'is fav') {
      itemAdd = favoritesPlaylist.song;
      itemAdd.push(realLove.song[idx]);
      favoritesPlaylist.song = itemAdd;
    }
  };
  console.log(favoritesPlaylist);
}
loadFavorites();

// Check if song being loaded is a share link than load song details into DOM
const searchParams = new URLSearchParams(window.location.search);
let shareSong = searchParams.get('share');
let urlAlbum = searchParams.get('album');
let urlSongIdx = searchParams.get('songIdx');
if (urlSongIdx != null) {
  songIndex = parseInt(urlSongIdx);
}
if (shareSong != null) {
  if (urlAlbum == 'RealLove') {
    selectedAlbum = 'RealLove';
    maxIndex = 3;
    checkAlbumToLoad();
  }
  if (urlAlbum == 'loveHeartbreakRepeat') {
    selectedAlbum = 'loveHeartbreakRepeat';
    maxIndex = 1;
    checkAlbumToLoad();
  }
  if (urlAlbum == 'wasted') {
    selectedAlbum = 'wasted';
    maxIndex = 4;
    checkAlbumToLoad();
  }
  if (urlAlbum == 'brixton') {
    selectedAlbum = 'brixton';
    maxIndex = 2;
    checkAlbumToLoad();
  }
  if (urlAlbum == 'singles') {
    selectedAlbum = 'singles';
    maxIndex = 1;
    checkAlbumToLoad();
  }
} else {
  selectedAlbum = 'singles';
  maxIndex = 1;
  checkAlbumToLoad();
}

// Update song details
function loadSong(song = 'Kandy', cover = '/images/placeholder.jpg', artist = 'SevenT33N') {
  songTitle.innerHTML = song;
  songArtist.innerHTML = artist;
  songAudio.src = `/music/${song}.mp3`;
  songCover.style.backgroundImage = `url('/images/${cover}.jpg')`;
  currentSong = song;
}

// Play Song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
  pageTitle.innerHTML = `Music Player | Playing "${currentSong}"`;
}
// Pause Song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  audio.pause();
  pageTitle.innerHTML = `Music Player | Music Paused`;
}
// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > maxIndex) {
    songIndex = 0;
  }
  checkAlbumToLoad();
  favorites("check");
  playSong();
}
// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = maxIndex;
  }
  checkAlbumToLoad();
  favorites("check");
  playSong();
}

function checkAlbumToLoad() {
  if (selectedAlbum == 'RealLove') {
    loadSong(realLove.song[songIndex], realLove.cover[songIndex], realLove.artist[songIndex]);
  } else if (selectedAlbum == 'wasted') {
    loadSong(wasted.song[songIndex], wasted.cover[songIndex], wasted.artist[songIndex]);
  } else if (selectedAlbum == 'brixton') {
    loadSong(brixton.song[songIndex], brixton.cover[songIndex], brixton.artist[songIndex]);
  } else {
    loadSong(singles.song[songIndex], singles.cover[songIndex], singles.artist[songIndex]);
  }
}

// Toggle Play Pause
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Update Progress Bar
function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  let time = calculateTime(currentTime);
  let totalTime = calculateTime(e.srcElement.duration);
  document.getElementById("time").innerHTML = `${time} / ${totalTime}`;
}

// Create Share link For Song
function shareLink() {
  linkShare = 'true';
  let linkAlbum = selectedAlbum;
  let linkSongIdx = songIndex;
  link = `https://88965e18-6095-4ea7-ab61-fe5a71db3818-00-356tyjwiilc9l.riker.replit.dev/musicplayer.html?share=${linkShare}&album=${linkAlbum}&songIdx=${linkSongIdx}`;
  // Get the text field
  var copyText = document.getElementById("shareLinkInput");
  copyText.value = link;
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// Fave Star Display
function setSolidStar() {
  document.getElementById("favStar").classList.remove("fa-regular");
  document.getElementById("favStar").classList.add("fa-solid");
  document.getElementById("favTxt").innerHTML = "Remove<br>favorite";
}
function setHollowStar() {
  document.getElementById("favStar").classList.remove("fa-solid");
  document.getElementById("favStar").classList.add("fa-regular");
  document.getElementById("favTxt").innerHTML = "Favorite";
}

// Add and Check Favorites
function favorites(action) {
  if (localStorage.getItem("saveFave") == "true") {
    if (action == 'toggle') {
      if (favStar.classList.contains("fa-regular")) {
        favStar.classList.remove("fa-regular");
        favStar.classList.add("fa-solid");
        favTxt.innerHTML = "Remove<br>favorite";
        console.log(favStar.classList);
      } else {
        favStar.classList.remove("fa-solid");
        favStar.classList.add("fa-regular");
        favTxt.innerHTML = "Favorite";
        console.log(favStar.classList);
      }
      toggleLocalStorage();
    }
    if (action == 'check') {
      if (selectedAlbum == 'RealLove') {
        if (localStorage.getItem(realLove.song[songIndex]) == 'is fav') {
          setSolidStar();
        } else {
          setHollowStar();
        }
      }
      if (selectedAlbum == 'loveHeartbreakRepeat') {
        if (localStorage.getItem(loveHeartbreakRepeat.song[songIndex]) == 'is fav') {
          setSolidStar();
        } else {
          setHollowStar();
        }
      }
      if (selectedAlbum == 'wasted') {
        if (localStorage.getItem(wasted.song[songIndex]) == 'is fav') {
          setSolidStar();
        } else {
          setHollowStar();
        }
      }
      if (selectedAlbum == 'brixton') {
        if (localStorage.getItem(brixton.song[songIndex]) == 'is fav') {
          setSolidStar();
        } else {
          setHollowStar();
        }
      }
      if (selectedAlbum == 'singles') {
        if (localStorage.getItem(singles.song[songIndex]) == 'is fav') {
          setSolidStar();
        } else {
          setHollowStar();
        }
      }
    }
  }
}

// Add favorites to local storage
function toggleLocalStorage() {
  if (selectedAlbum == "RealLove") {
    if (localStorage.getItem(realLove.song[songIndex]) == 'is fav') {
      localStorage.removeItem(realLove.song[songIndex]);
    } else {
      localStorage.setItem(realLove.song[songIndex], 'is fav');
    }
  }
  if (selectedAlbum == "loveHeartbreakRepeat") {
    if (localStorage.getItem(realLove.song[songIndex]) == 'is fav') {
      localStorage.removeItem(realLove.song[songIndex]);
    } else {
      localStorage.setItem(realLove.song[songIndex], 'is fav');
    }
  }
  if (selectedAlbum == "wasted") {
    if (localStorage.getItem(wasted.song[songIndex]) == 'is fav') {
      localStorage.removeItem(wasted.song[songIndex]);
    } else {
      localStorage.setItem(wasted.song[songIndex], 'is fav');
    }
  }
  if (selectedAlbum == "brixton") {
    if (localStorage.getItem(brixton.song[songIndex]) == 'is fav') {
      localStorage.removeItem(brixton.song[songIndex]);
    } else {
      localStorage.setItem(brixton.song[songIndex], 'is fav');
    }
  }
  if (selectedAlbum == "singles") {
    if (localStorage.getItem(singles.song[songIndex]) == 'is fav') {
      localStorage.removeItem(singles.song[songIndex]);
    } else {
      localStorage.setItem(singles.song[songIndex], 'is fav');
    }
  }
}

// open album description6
function openAlbum() {
  window.location.href = `albumViewer.html?album=${selectedAlbum}`;
}

// Calculate the time of the song
function calculateTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

// Events
prevBtn.addEventListener('click', prevSong);
skipBtn.addEventListener('click', nextSong);
songAudio.addEventListener('timeupdate', updateProgress);
songAudio.addEventListener('ended', nextSong);
songAudio.addEventListener("loadeddata", updateProgress);