const body = document.querySelector("body");

const IMG_NUMBER = 28;

function paintImange(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`; // png는 어떻게 구분해서 넣어야 할까 씨부레!
  image.classList.add("bgImage");
  body.appendChild(image);

  image.onerror = function () {
    image.src = `images/${imgNumber + 1}.png`;
  };
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImange(randomNumber);
}

init();
