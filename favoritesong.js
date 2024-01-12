// DOM Variables
let songContainer = document.getElementById("favSongsContainer");


for (let i = 0; i <= realLove.song.length; i++) {
  let songIndex = i - 1;
  if (localStorage.getItem(realLove.song[songIndex]) == 'is fav') {
    songContainer.innerHTML += `<div title="${realLove.song[songIndex]}" class="music-item" onclick="window.location.href = '/musicplayer.html?share=false&album=RealLove&songIdx=${songIndex}'"><img src="/images/${realLove.cover[songIndex]}.jpg" alt="${realLove.song[songIndex]}" loading="lazy"></div>`;
  }
};
for (let i = 0; i <= wasted.song.length; i++) {
  let songIndex = i - 1;
  if (localStorage.getItem(wasted.song[songIndex]) == 'is fav') {
    songContainer.innerHTML += `<div title="${wasted.song[songIndex]}" class="music-item" onclick="window.location.href = '/musicplayer.html?share=false&album=RealLove&songIdx=${songIndex}'"><img src="/images/${wasted.cover[songIndex]}.jpg" alt="${wasted.song[songIndex]}" loading="lazy"></div>`;
  }
};
for (let i = 0; i <= brixton.song.length; i++) {
  let songIndex = i - 1;
  if (localStorage.getItem(brixton.song[songIndex]) == 'is fav') {
    songContainer.innerHTML += `<div title="${brixton.song[songIndex]}" class="music-item" onclick="window.location.href = '/musicplayer.html?share=false&album=RealLove&songIdx=${songIndex}'"><img src="/images/${brixton.cover[songIndex]}.jpg" alt="${brixton.song[songIndex]}" loading="lazy"></div>`;
  }
};
for (let i = 0; i <= singles.song.length; i++) {
  let songIndex = i - 1;
  if (localStorage.getItem(singles.song[songIndex]) == 'is fav') {
    songContainer.innerHTML += `<div title="${singles.song[songIndex]}" class="music-item" onclick="window.location.href = '/musicplayer.html?share=false&album=RealLove&songIdx=${songIndex}'"><img src="/images/${singles.cover[songIndex]}.jpg" alt="${singles.song[songIndex]}" loading="lazy"></div>`;
  }
};