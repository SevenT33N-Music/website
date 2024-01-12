const resultSection = document.getElementById("searchResults");
const resultsTip = document.getElementById("resultsTip");
const albumResults = document.getElementById("albumResults");
const singlesResults = document.getElementById("singlesResults");
const remixResults = document.getElementById("remixResults");

// Result Format: Image Source, Album, Song Index
// album: [["RealLove.jpg", "RealLove", "0"]
const obj = {
  love: {
    album: ["RealLove.jpg", 'loveHeartbreakRepeat.jpg'],
    singles: ["loveReggaeton.jpg"],
    remix: ["All of Me.jpg"]
  },
  heartbreak: {
    album: ["loveHeartbreakRepeat.jpg"],
    singles: [""],
    remix: [""]
  }
};

/*
for (const [key, value] of Object.entries(obj)) {
  console.log(`Level 1: key = ${key}. value = ${value}`);
  for (const [key2, value2] of Object.entries(value)) {
    console.log(`Level 2: key = ${key2}. value = ${value2}`);
  }
}
*/

var addedToAlbum = "no";
var addedToSingles = "no";
var addedToRemix = "no";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const searchParams = new URLSearchParams(window.location.search);
let userSearch = searchParams.get('q');
var searchWithCapital;

if (userSearch == null) {
  userSearch = null;
} else {
  searchWithCapital = capitalizeFirstLetter(userSearch);
}

resultsTip.innerHTML += `<b><i>${searchWithCapital}</i></b><br><h6 style="font-size: calc(1.1vw + 0.75vh);">**Search is W.I.P**</h6><br><br>`;

if (userSearch != null) {
  for (const [key, value] of Object.entries(obj)) {
    //console.log(`Key (Search): ${key}`);
    if (key == userSearch.toLowerCase()) {
      for (const [key2, value2] of Object.entries(value)) {
        if (key2 == "album") {
          value2.forEach(function(item) {
            if (item.includes(".jpg")) {
              albumResults.innerHTML += `<div class="music-item"><img src="/images/${item}" alt="${item}" loading="lazy"></div>`;
            } else {
              albumResults.innerHTML += `<h3>No Results Found in Albums...</h3>`;
            }
          });
        }
        if (key2 == "singles") {
          value2.forEach(function(item) {
            if (item.includes(".jpg")) {
              singlesResults.innerHTML += `<div class="music-item"><img src="/images/${item}" alt="${item}" loading="lazy"></div>`;
            } else {
              singlesResults.innerHTML += `<h3>No Results Found in Singles...</h3>`;
            }
          });
        }
        if (key2 == "remix") {
          value2.forEach(function(item) {
            if (item.includes(".jpg")) {
              remixResults.innerHTML += `<div class="music-item"><img src="/images/${item}" alt="${item}" loading="lazy"></div>`;
            } else {
              remixResults.innerHTML += `<h3>No Results Found in Remixes...</h3>`;
            }
          });
        }
      }
    }
  }
};

const blurDivs = document.querySelectorAll('.music-item');
blurDivs.forEach(div => {
  const img = div.querySelector("img");

  function loaded() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener('load', loaded);
  }
});