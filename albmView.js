// DOM Variables
const DOMAlbumCover = document.getElementById("albumCover");
const DOMAlbumTitle = document.getElementById("albumTitle");
const DOMAlbumDescription = document.getElementById("albumDescription");

// Search Params
const searchParams = new URLSearchParams(window.location.search);
let albumToView = searchParams.get('album');

// Check Album
if (albumToView == "RealLove") {
  DOMAlbumCover.style.backgroundImage = "url(/images/RealLove.jpg)";
  DOMAlbumTitle.innerHTML = "Real Love";
  DOMAlbumDescription.innerHTML = realLove.description;
}