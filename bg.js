const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("Finished loading");
}

function paintImage(imgNumber) {
    const img = new Image();
    img.src =`./images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
    img.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();