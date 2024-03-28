function goHome() {
  window.location.href = '../'
}

let currentPlaying = '';
let canvasNum = 0;
audioNum = 0;

window.onload = function() {
  const input = document.getElementById('text-input');
  let playBtn = document.querySelectorAll('.play-btn');
  for (let i = 0; i < playBtn.length; i++) {
    let item = playBtn[i];
    item.addEventListener('click', function() {
      input.value = `sounds/${item.id}.wav`;
      //console.log('creating visualization...');
      function loadCanvas() {
        if (canvasNum > 0) {
          let eleRemove = `canvas${canvasNum - 1}`;
          let audioRemove = `audio${audioNum - 1}`;
          //console.log(`Delete ${eleRemove}`);
          document.getElementById(eleRemove).remove();
          document.getElementById(audioRemove).remove();
        }
        let canvasContainer = document.getElementById(`${item.id}Visual`);
        const source = input.value;
        //console.log('Source: ', source);
        let audioEle = document.createElement('audio');
        audioEle.style.display = "none";
        audioEle.src = source;
        audioEle.id = `audio${audioNum}`;
        audioNum += 1;
        canvasContainer.appendChild(audioEle);
        let canvasEle = document.createElement('canvas');
        canvasEle.id = `canvas${canvasNum}`;
        //console.log(canvasEle.id);
        canvasNum += 1;
        canvasContainer.appendChild(canvasEle);
        canvas = document.getElementById(`canvas${canvasNum - 1}`);
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        const ctx = canvas.getContext('2d');
        const context = new AudioContext();
        let src = context.createMediaElementSource(audioEle);
        const analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);
        // analyser.fftSize = 32;
        // analyser.fftSize = 64;
        //analyser.fftSize = 128;
        //analyser.fftSize = 256;
        //analyser.fftSize = 512;
        //analyser.fftSize = 1024;
        analyser.fftSize = 2048;
        //analyser.fftSize = 4096;
        //analyser.fftSize = 8192;
        //analyser.fftSize = 16384;
        //analyser.fftSize = 32768;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        //console.log('DATA-ARRAY: ', dataArray);
        const HEIGHT = canvas.height;
        const WIDTH = canvas.width;
        //console.log(`WIDTH: ${WIDTH}, HEIGHT: ${HEIGHT}`);
        const barWidth = (WIDTH / bufferLength) * 13;
        //console.log(`Bar Width: ${barWidth}`);
        //console.log(`Total Width: ${(117*10)+(barWidth*118)}`);
        let barHeight;
        x = 0;
        function renderFrame() {
          requestAnimationFrame(renderFrame);
          x = 0;
          analyser.getByteFrequencyData(dataArray);
          ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
          ctx.fillRect(0, 0, WIDTH, HEIGHT);
          let r, g, b;
          let bars = 118;
          for (let y = 0; y < bars; y++) {
            barHeight = (dataArray[x] * 2.5);
            if (dataArray[y] > 210) {
              r = 250;
              g = 0;
              b = 255;
            } else if (dataArray[y] > 200) {
              r = 250;
              g = 255;
              b = 0;
            } else if (dataArray[y] > 190) {
              r = 204;
              g = 255;
              b = 0;
            } else if (dataArray[y] > 180) {
              r = 0;
              g = 219;
              b = 131;
            } else {
              r = 0;
              g = 199;
              b = 255;
            }
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
            x += 10;
          }
        }
        audioEle.play();
        renderFrame();
      }
      //console.log('Visual Created!');
      loadCanvas();
    });
  }
  /*
  input.oninput = function() {
    console.log('creating visualization...');
    function loadCanvas() {
      const source = input.value;
      console.log('Source: ', source);
      audio.src = source;
      canvas.style.width = window.innerWidth;
      canvas.style.height = "15vh";
      const ctx = canvas.getContext('2d');
      const context = new AudioContext();
      let src = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      src.connect(analyser);
      analyser.connect(context.destination);
      // analyser.fftSize = 32;
      // analyser.fftSize = 64;
      //analyser.fftSize = 128;
      //analyser.fftSize = 256;
      //analyser.fftSize = 512;
      //analyser.fftSize = 1024;
      analyser.fftSize = 2048;
      //analyser.fftSize = 4096;
      //analyser.fftSize = 8192;
      //analyser.fftSize = 16384;
      //analyser.fftSize = 32768;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      console.log('DATA-ARRAY: ', dataArray);
      const HEIGHT = canvas.height;
      const WIDTH = canvas.width;
      console.log(`WIDTH: ${WIDTH}, HEIGHT: ${HEIGHT}`);
      const barWidth = (WIDTH / bufferLength) * 13;
      console.log(`Bar Width: ${barWidth}`);
      console.log(`Total Width: ${(117*10)+(barWidth*118)}`);
      let barHeight;
      x = 0;
      function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        let r, g, b;
        let bars = 118;
        for (let y = 0; y < bars; y++) {
          barHeight = (dataArray[x] * 2.5);
          if (dataArray[y] > 210) {
            r = 250;
            g = 0;
            b = 255;
          } else if (dataArray[y] > 200) {
            r = 250;
            g = 255;
            b = 0;
          } else if (dataArray[y] > 190) {
            r = 204;
            g = 255;
            b = 0;
          } else if (dataArray[y] > 180) {
            r = 0;
            g = 219;
            b = 131;
          } else {
            r = 0;
            g = 199;
            b = 255;
          }
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
          x += 10;
        }
      }
      audio.play();
      renderFrame();
    }
    loadCanvas();
  }
  */
}