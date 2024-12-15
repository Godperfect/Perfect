/*
import { Liquid1Background } from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/liquid1.cdn.min.js";
const threeBackground = Liquid1Background(document.getElementById("canvas"));
*/


import { Neon1Background } from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/neon1.cdn.min.js";
const threeBackground = Neon1Background(document.getElementById("canvas"));


import { Bokeh1Background } from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js";
const threeBackground = Bokeh1Background(document.getElementById("canvas"));
threeBackground.loadMap(
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png"
);

threeBackground.setColors([
  0xffffff * Math.random(),
  0xffffff * Math.random(),
  0xffffff * Math.random()
]);

document.body.addEventListener("click", () => {
  threeBackground.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random()
  ]);
});

// Fullscreen toggle functionality
const fullscreenBtn = document.getElementById("fullscreenBtn");
fullscreenBtn.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}



  let countdownElement = document.getElementById("countdown");
  let countdown = 5;

  // Update countdown every second
  let timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = `Redirecting in ${countdown} second${countdown !== 1 ? 's' : ''}...`;

    if (countdown <= 0) {
      clearInterval(timer);
      // Redirect to page2.html
      window.location.href = "page2.html";
    }
  }, 1000);


