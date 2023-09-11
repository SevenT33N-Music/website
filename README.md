![SeveT33N Music Logo](/.github/workflows/logo.png)

# SEVENT33N MUSIC

## DESCRIPTION

This website looks simple enough, but it is quite complex. With features like music playlists, dark mode, smooth scrolling, and so much more, its no wonder this took several months to complete. But that would be lying, becuase it still isnt complete! In fact, it gets updated quite often!

## INDEX.HTML

This is the home page. Features include the most recent news update, the logo[^1], and the footer, which contains links to my socials[^2].

## NEWS.HTML

This is the page where you can get relevent info about whats happening with my music.

## SETTINGS.HTML

This is the page where you can change your preferences. You can switch between light mode and dark mode, as well as disable or enable smooth scrolling.

## UPDATING.HTML

This is the page you will see when the variable in *updating.js* is set to "1".

## MUSIC.HTML

This is my favorite page. It contains one simple (yet complex) feature: An audio playlist. You can shuffle, pause, and skip songs. If a song does not have a cover, a placeholder[^3] will be added instead. Here is a basic code snippet to give you an idea of how complex this is (for a beginner of course):

    var coverArr = ['/IMAGES/stay high trap.jpg', '/IMAGES/placeHolderCover.jpeg', '/IMAGES/someoneYouLoved.jpeg'];
      var songArr = ['/AUDIO/stayHighTrap.mp3', '/AUDIO/Mekayla.mp3', '/AUDIO/someoneYouLoved.mp3'];
      var songTitleArr = ['Juice WRLD - Stay High (Trap Remix)', 'SevenT33N - Mekayla [Official Audio]', 'Lewis Capaldi - Someone You Loved (Acoustic Remix)'];
      function newSongNum(num) {
        var curSongIdx = Number(localStorage.getItem('songIndex'));
        if (num == '-1') {
          if (curSongIdx < 1) {
            var calc = songArr.length - 1;
            localStorage.setItem('songIndex', calc);
          } else {
            var calc = curSongIdx - 1;
            localStorage.setItem('songIndex', calc);
          }
        } else if (num == '+1') {
          var calc = songArr.length - 1;
          if (curSongIdx + 1 > calc) {
            localStorage.setItem('songIndex', '0');
          } else {
            var calc = curSongIdx + 1;
            localStorage.setItem('songIndex', calc);
          }
        } else if (num == '=') {
          var calc = songArr.length - 1;
          if (curSongIdx + 1 > calc) {
            localStorage.setItem('songIndex', '0');
          } else {
            var calc = curSongIdx + 1;
            localStorage.setItem('songIndex', calc);
          }
        }
        var newIdx = Number(localStorage.getItem('songIndex'));
        var newSong = songArr[newIdx];
        var newSongTitle = songTitleArr[newIdx];
        var newSongCover = coverArr[newIdx];
        document.getElementById('song').src = newSong;
        document.getElementById('songCover').src = newSongCover;
        document.getElementById('songTitle').innerHTML = newSongTitle;
        audio('play');
      }
      function shuffle(array1, array2, array3) {
        let currentIndex = array1.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array1[currentIndex], array1[randomIndex]] = [
            array1[randomIndex], array1[currentIndex]];
          
          [array2[currentIndex], array2[randomIndex]] = [
            array2[randomIndex], array2[currentIndex]];
          
          [array3[currentIndex], array3[randomIndex]] = [
            array3[randomIndex], array3[currentIndex]];
        }
        return array1;
        return array2;
        return array3;
      }
      function audio(action) {
        var audioE = document.getElementById('song');
        audioE.addEventListener("ended", function() {
          audioE.pause();
          audioE.currentTime = 0;
          newSongNum('+1');
          audioE.play();
        });
        function playAudio() {
          audioE.play();
          toggle('play');
        }
        function pauseAudio() {
          audioE.pause();
          toggle('pause');
        }
        if (action == 'play') {
          playAudio();
          localStorage.setItem('runLoop', 'yes');
        } else if (action == 'pause') {
          pauseAudio();
          localStorage.setItem('runLoop', 'no');
        } else if (action == 'shuffle') {
          pauseAudio();
          shuffle(songArr, songTitleArr, coverArr);
          console.log(songArr);
          console.log(songTitleArr);
          console.log(coverArr);
          playAudio();
        }
      }
      function toggle(act) {
        let play = document.getElementById('playBtn');
        let pause = document.getElementById('pauseBtn');
        if (act == 'play') {
          play.setAttribute("hidden", "hidden");
          pause.removeAttribute("hidden");
        } 
        if (act == 'pause') {
          pause.setAttribute("hidden", "hidden");
          play.removeAttribute("hidden");
        }
      }
      function restart(song) {
        let id = document.getElementById(song);
        id.pause();
        document.getElementById(song).currentTime = 0;
        toggle('play');
        id.play();
      }

[^1]: Logo:  
![logo](https://github.com/SevenT33N-Music/website/assets/135186375/b0b29ad1-739d-4bd6-92e4-967ab3f202ef)

[^2]: Socials: 
      - <youtube.com/@SevenT33N-Music>
      - <https://patreon.com/SevenT33NMusic>
      - <https://paypal.me/SevenT33NMusic?country.x=US&locale.x=en_US>

[^3]: Placeholder:  
![placeHolderCover](https://github.com/SevenT33N-Music/website/assets/135186375/e972a2ec-50c6-40f2-9167-8662aa4c1975)
