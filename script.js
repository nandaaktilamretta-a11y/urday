/* =======================================================
                        ELEMENTS
======================================================= */

const introScreen =
document.getElementById("introScreen");

const opening =
document.getElementById("opening");

const main =
document.getElementById("main");

const music =
document.getElementById("music");

const voice =
document.getElementById("voice");

const typing =
document.getElementById("typing");

const photoSection =
document.getElementById("photoSection");

const videoSection =
document.getElementById("videoSection");

const video =
document.getElementById("videoPlayer");

const flowerBtn =
document.querySelector(".flower-btn");

/* =======================================================
                    MESSAGE TEXT
======================================================= */

const text = `
Aiii bumil aku cantikk 🥺💖

Maafin Nala yaaa baru sempat ngucapin...

Kalau kakak lagi liat ini,
semoga kakak seneng yaaa ✨

Happy 26th birthday kakak sayangg ❤

Jadi calon mama yang terbaik ya kak 🥺💖

Sehat terus yaa calon mama cantik,
happy terus,
dan jangan capek jadi kuat buat semuanya 🥺

Nala bersyukur banget punya kakak kayak kakak 💕

Makasih udah selalu sayang sama Nala,
selalu dengerin Nala,
dan selalu jadi rumah ternyaman 💖

Sebentar lagi bakal ada malaikat kecil
yang beruntung punya mama sebaik kakak 🥺🤍

Semoga semua hal baik selalu datang ke hidup kakak ✨

Dan semoga nanti,
anak kakak tumbuh dengan cinta
sehangat hati mamanya 💖

Sayang kakak selamanya 🌷
`;

/* =======================================================
                    INTRO SCREEN
======================================================= */

setTimeout(()=>{

introScreen.style.opacity = "0";

setTimeout(()=>{

introScreen.style.display = "none";

},1000);

},5000);

/* =======================================================
                    OPEN WEBSITE
======================================================= */

opening.addEventListener("click", ()=>{

opening.style.opacity = "0";

setTimeout(()=>{

opening.style.display = "none";

main.style.display = "block";

createFloatingHearts();

},1500);

});

/* =======================================================
                    MUSIC TOGGLE
======================================================= */

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* =======================================================
                    SHOW PHOTOS
======================================================= */

function showPhotos(){

/* SHOW PHOTO */

photoSection.classList.remove("hidden");

/* HIDE VIDEO */

videoSection.classList.add("hidden");

/* STOP VIDEO */

video.pause();

video.currentTime = 0;

/* AUDIO SETTINGS */

voice.volume = 0.8;
music.volume = 0.5;

/* PLAY AUDIO */

music.play();
voice.play();

/* RESET TYPING */

typing.innerHTML = "";

index = 0;

/* START TYPING */

typingEffect();

/* HEART EFFECT */

createHeartRain();

window.scrollTo({
top:photoSection.offsetTop,
behavior:"smooth"
});

}

/* =======================================================
                    SHOW VIDEO
======================================================= */

function showVideo(){

/* SHOW VIDEO */

videoSection.classList.remove("hidden");

/* HIDE PHOTO */

photoSection.classList.add("hidden");

/* STOP AUDIO */

voice.pause();
music.pause();

voice.currentTime = 0;
music.currentTime = 0;

/* PLAY VIDEO */

video.play();

window.scrollTo({
top:videoSection.offsetTop,
behavior:"smooth"
});

}

/* =======================================================
                    TYPEWRITER
======================================================= */

let index = 0;

function typingEffect(){

if(index < text.length){

typing.innerHTML += text.charAt(index);

index++;

setTimeout(typingEffect,45);

}

}

/* =======================================================
                    HEART RAIN
======================================================= */

function createHeartRain(){

for(let i = 0; i < 150; i++){

let heart =
document.createElement("div");

heart.className = "heart";

const icons = [
"💖",
"🌸",
"✨",
"🤍",
"🎀",
"💐"
];

heart.innerHTML =
icons[Math.floor(Math.random()*icons.length)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*35 + 15) + "px";

heart.style.animationDuration =
(Math.random()*3 + 2) + "s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}

/* =======================================================
                FLOATING HEARTS
======================================================= */

function createFloatingHearts(){

setInterval(()=>{

let sparkle =
document.createElement("div");

sparkle.className = "heart";

sparkle.innerHTML =
["💖","✨","🌸","🎀"]
[Math.floor(Math.random()*4)];

sparkle.style.left =
Math.random()*100 + "vw";

sparkle.style.fontSize =
(Math.random()*20 + 10) + "px";

sparkle.style.animationDuration =
(Math.random()*4 + 4) + "s";

sparkle.style.opacity = "0.6";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},7000);

},1200);

}

/* =======================================================
                    FLOWER BUTTON
======================================================= */

flowerBtn.addEventListener("click", ()=>{

createHeartRain();

alert("Flowers from Nala 🌹💖");

});

/* =======================================================
                    POLAROID EFFECT
======================================================= */

const polaroids =
document.querySelectorAll(".polaroid");

polaroids.forEach((photo,index)=>{

photo.style.opacity = "0";

setTimeout(()=>{

photo.style.transition = "1.5s";

photo.style.opacity = "1";

},index * 250);

});

/* =======================================================
                    VIDEO EFFECT
======================================================= */

video.addEventListener("mouseover", ()=>{

video.style.transform = "scale(1.01)";

});

video.addEventListener("mouseout", ()=>{

video.style.transform = "scale(1)";

});

/* =======================================================
                    PARALLAX
======================================================= */

window.addEventListener("mousemove",(e)=>{

const x =
(window.innerWidth / 2 - e.pageX) / 60;

const y =
(window.innerHeight / 2 - e.pageY) / 60;

document.querySelector(".cute-bear")
.style.transform =
`translate(${x}px, ${y}px)`;

});

/* =======================================================
                CHUBBY FLOAT
======================================================= */

setInterval(()=>{

document.querySelector(".chubby-character")
.style.transform =
"translateY(-10px)";

setTimeout(()=>{

document.querySelector(".chubby-character")
.style.transform =
"translateY(0px)";

},1000);

},3000);

/* =======================================================
                AUTO HEART EFFECT
======================================================= */

setInterval(()=>{

createHeartRain();

},25000);

/* =======================================================
                    KEYBOARD
======================================================= */

document.addEventListener("keydown",(e)=>{

if(e.code === "Space"){

e.preventDefault();

toggleMusic();

}

});

/* =======================================================
                VIDEO PLAY EFFECT
======================================================= */

video.addEventListener("play", ()=>{

createHeartRain();

});

/* =======================================================
                    PAGE LOADED
======================================================= */

window.onload = ()=>{

console.log("Website loaded with love by Nala 💖");

};