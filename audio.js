const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// Song Titles
const songs = ['Twilight', 'Together', 'Into Darkness (C Major)', 'Close Call', 'Love Reggaeton', 'Stay With Me', 'Someone You Loved', 'Lucky You Remix'];
const covers = ['Real Love', 'Real Love', 'Real Love', 'Real Love', 'Love Reggaeton', 'Placeholder', 'Someone You Loved', 'Placeholder'];

// Keep track of songs
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex], covers[songIndex]);

// Update song details
function loadSong(song,art) {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${art}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex], covers[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex], covers[songIndex]);

  playSong();
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  let newCurrentTime = (clickX / width) * duration;
  console.log("New Current Time: " + newCurrentTime);
  if (audio.buffered.end(0) >= newCurrentTime) {
    audio.currentTime = newCurrentTime;
  }
}


// Event Listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change Song Events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
// progressContainer.addEventListener('click', setProgress);