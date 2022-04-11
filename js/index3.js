
const play = document.querySelector(".play"),
pause = document.querySelector(".pause");

const audio = document.querySelector(".audio audio");


play.addEventListener("click", () => {
audio.play();
update();
});



pause.addEventListener("click", () => {
audio.pause();
});



const seasons = document.querySelectorAll(".season"),
video = document.querySelector(".video video");

seasons.forEach((season) => {
season.addEventListener("click", () => {
  video.src = season.getAttribute("video-src");
});
});



const durations = document.querySelectorAll(".duration");


var audioDuration = 120; 


durations.forEach((duration) => {
duration.addEventListener("click", () => {
  audioDuration = duration.getAttribute("audio-duration");
  update();
});
});



const path = document.querySelector(".rect"),
remainingTimeEl = document.querySelector(".audio-remaining-time");


const pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength;

function update() {

if (audio.currentTime >= audioDuration) {
  audio.pause(); 
  audio.currentTime = 0; 
}



var portionPlayed = audio.currentTime / audioDuration;


path.style.strokeDashoffset = -portionPlayed * pathLength;


var remainingTimeInSec = audioDuration - audio.currentTime;
renderRemainingTime(remainingTimeInSec);

if (!audio.paused) {
  requestAnimationFrame(update);
  console.log("update");
}
}
update();


function renderRemainingTime(timeInSec) {
let min = Math.floor(timeInSec / 60);
let sec = Math.floor(timeInSec % 60);


min = min < 10 ? `0${min}` : min;
sec = sec < 10 ? `0${sec}` : sec;

remainingTimeEl.innerHTML = `${min}:${sec}`;
}