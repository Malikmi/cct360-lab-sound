let player = document.getElementById("player");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");


let rainBtn = document.getElementById("rainBtn");
let trafficBtn = document.getElementById("trafficBtn");
let seaBtn = document.getElementById("seaBtn");

let scenePictures = document.getElementsByClassName("scenePicture");
let sceneButtons = document.getElementsByClassName("sceneBtn");

let sceneTitle = document.getElementById("sceneTitle");
let caption = document.getElementById("caption");
let message = document.getElementById("message");
let time = document.getElementById("time");


let sounds = [
    "audio/rain.mp3",
    "audio/traffic.mp3",
    "audio/seaview.mp3"
];

let titles = [
    "Rain in Karachi",
    "Traffic in Karachi",
    "Karachi Sea View"
];

let captions = [
    "Listen to the rain falling on the streets.",
    "Listen to the traffic and horns of the city.",
    "Listen to the waves reaching the shore."
];

let scene = 0;

rainBtn.addEventListener("click", chooseRain);
trafficBtn.addEventListener("click", chooseTraffic);
seaBtn.addEventListener("click", chooseSea);

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

player.addEventListener("play", playerStarted);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);
player.addEventListener("timeupdate", updateTime);
player.addEventListener("error", audioError);

function showScene() {
    for (let i = 0; i < scenePictures.length; i++) {
        scenePictures[i].style.display = "none";
    }

    for (let i = 0; i < sceneButtons.length; i++) {
        sceneButtons[i].style.backgroundColor = "#245446";
    }

    scenePictures[scene].style.display = "block";
    sceneButtons[scene].style.backgroundColor = "#8b6631";

    sceneTitle.innerHTML = titles[scene];
    caption.innerHTML = captions[scene];
}

function changeScene() {
    player.pause();
    player.src = sounds[scene];

    showScene();

    time.innerHTML = "Time: 0 seconds";
    message.innerHTML = "Loading: " + titles[scene];

    player.play();
}

function chooseRain() {
    scene = 0;
    changeScene();
}

function chooseTraffic() {
    scene = 1;
    changeScene();
}

function chooseSea() {
    scene = 2;
    changeScene();
}

function playAudio() {
    player.play();
}

function pauseAudio() {
    player.pause();
}

function stopAudio() {
    player.pause();

    if (player.readyState > 0) {
        player.currentTime = 0;
    }

    time.innerHTML = "Time: 0 seconds";
    message.innerHTML = "Stopped. Press Play to listen again.";
}

function playerStarted() {
    message.innerHTML = "Playing: " + titles[scene];
}

function playerPaused() {
    message.innerHTML = "Paused. Press Play to continue.";
}

function playerEnded() {
    message.innerHTML = "Finished. Choose another scene or press Play.";
}

function updateTime() {
    time.innerHTML = "Time: "
        + Math.floor(player.currentTime) + " seconds";
}

function audioError() {
    message.innerHTML =
        "Audio could not load. Check the MP3 filename and audio folder.";
}

showScene();