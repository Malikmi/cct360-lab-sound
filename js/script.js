let player = document.getElementById("player");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");

let streetBtn = document.getElementById("streetBtn");
let cityBtn = document.getElementById("cityBtn");
let seaBtn = document.getElementById("seaBtn");

let scenePictures = document.getElementsByClassName("scenePicture");
let sceneButtons = document.getElementsByClassName("sceneBtn");

let sceneTitle = document.getElementById("sceneTitle");
let caption = document.getElementById("caption");
let message = document.getElementById("message");
let time = document.getElementById("time");

let sounds = [
    "audio/rain.wav",
];

let titles = [
    "1. Rainy streets",
    "2. City traffic",
    "3. Sea View"
];

let captions = [
    "Listen to the rain falling on Karachi's streets.",
    "Listen to the traffic and horns of the city.",
    "Listen to the waves along Karachi's shore."
];

let scene = 0;

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

streetBtn.addEventListener("click", chooseRain);
cityBtn.addEventListener("click", chooseTraffic);
seaBtn.addEventListener("click", chooseSea);

player.addEventListener("play", playerStarted);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);
player.addEventListener("timeupdate", updateTime);
player.addEventListener("error", audioError);

function showScene() {
    for (let i = 0; i < scenePictures.length; i++) {
        scenePictures[i].style.display = "none";
        sceneButtons[i].style.backgroundColor = "#245446";
    }

    scenePictures[scene].style.display = "block";
    sceneButtons[scene].style.backgroundColor = "#8b6631";

    sceneTitle.innerHTML = titles[scene];
    caption.innerHTML = captions[scene];
}

function changeSound() {
    player.pause();
    player.src = sounds[scene];
    showScene();
    time.innerHTML = "Time: 0 seconds";
    player.play();
}

function chooseRain() {
    scene = 0;
    changeSound();
}



showScene();