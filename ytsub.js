const APIkey = "AIzaSyCjxn16pm5UXCqUJrth8Ki3GUxLKXfu3d8";
const youtubeID = "UCZD3Czatrbhx4210Wn9CEiA";

const subCount = document.querySelector(".sub-count");
const element = document.querySelector(".yt");

const getYoutubeSubs = async () => {
  const getData = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`
  );
  
  const ytSubs = getData.data.items[0].statistics.subscriberCount;
  let formattedSub;

  if (ytSubs.length >= 4 && ytSubs.length <= 6) {
    formattedSub = Math.floor(ytSubs / 1000);
    subCount.innerHTML = `${formattedSub}K`;
    return;
  }
  if (ytSubs.length >= 7) {
    formattedSub = Math.floor(ytSubs / 1000000);
    subCount.innerHTML = `${formattedSub}M`;
    return;
  }
  
  subCount.innerHTML = ytSubs;
  element.style.textAlign = "center";
}

getYoutubeSubs();