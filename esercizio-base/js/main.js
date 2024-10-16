const images = [
  {
    image: "https://static.zara.net/assets/public/0ed3/04d4/45604e84a924/2b672e0ece52/image-portrait-ipad-5462bdb3-2d84-4fd9-a492-48cb8fe5e1e7-default_0/image-portrait-ipad-5462bdb3-2d84-4fd9-a492-48cb8fe5e1e7-default_0.jpg?ts=1728650508350&w=1317&f=auto",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "https://static.zara.net/assets/public/a11b/7685/9f2c4a6ebfaa/1bbe7e8df219/image-portrait-ipad-cbe6f485-41e8-4be7-b185-bea93882231b-default_0/image-portrait-ipad-cbe6f485-41e8-4be7-b185-bea93882231b-default_0.jpg?ts=1728459025119&w=1317&f=auto",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "https://static.zara.net/assets/public/97cb/268b/d1464a25a8fb/371b22b62bc0/06318221704-p/06318221704-p.jpg?ts=1728633764147&w=1317&f=auto",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "https://static.zara.net/assets/public/d112/0dd7/250f412e844d/2d5ed86a17ee/image-portrait-ipad-c2fcd5f7-7103-4ec7-8d90-ee59f4bf2a12-default_0/image-portrait-ipad-c2fcd5f7-7103-4ec7-8d90-ee59f4bf2a12-default_0.jpg?ts=1728919237267&w=1317&f=auto",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "https://static.zara.net/assets/public/c3cd/6482/de2e4068a39e/a0393b5f90ee/image-portrait-ipad-d9b89599-3a2f-4dd9-ac53-212c3e5397c2-default_0/image-portrait-ipad-d9b89599-3a2f-4dd9-ac53-212c3e5397c2-default_0.jpg?ts=1728650284843&w=1317&f=auto",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Scorciatoia per prendere tutto dinamicamente
const $one = document.getElementById.bind(document);

// bottoni
const btnAvanti = $one("btnAvanti");
const btnIndietro = $one("btnIndietro");
const btnStopStart = $one("my-stop-button");
const btnInverti = $one("my-order-button");
const contIndexActive = $one('contIndexActive');
const carouselContainer = $one('carouselContainer');
const divContainerGeneral = $one("divContainerGeneral");

//* -------------------------------
//* ------- VARIABLES -------------
//* -------------------------------
let intervalID = null;
let indexSlide = 0;
let indexInvert = true;
let startStop = false;
//* -------------------------------
//* ------- /VARIABLES ------------
//* -------------------------------

const imgDisplay = document.createElement('img');
imgDisplay.src = images[indexSlide].image;
imgDisplay.style.opacity = '.5';

images.forEach((i, index) => {

  carouselContainer.append(imgDisplay);
  divContainerGeneral.append(carouselContainer);

  // slider circle
  const circleActive = document.createElement('span');

  Object.assign(circleActive.style, {
    display: 'flex',
    width: '20px',
    height: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: indexSlide === index ? 'blue' : 'white',
  });
  contIndexActive.append(circleActive);
});

function updateCircles() {
  const circles = contIndexActive.querySelectorAll('span');
  circles.forEach((circle, idx) => {
    circle.style.backgroundColor = idx === indexSlide ? 'blue' : 'white';
  });
}

btnAvanti.addEventListener('click', (e) => {
  clearInterval(intervalID);
  e.preventDefault();
  e.stopPropagation();
  indexSlide < images.length - 1 ? indexSlide++ : indexSlide = 0;
  imgDisplay.src = images[indexSlide].image;
  updateCircles();
})

btnIndietro.addEventListener('click', (e) => {
  clearInterval(intervalID);
  e.preventDefault();
  e.stopPropagation();
  imgDisplay.src = images[indexSlide].image;
  indexSlide > 0 ? indexSlide-- : indexSlide = images.length - 1;
  updateCircles();
})

function IntervalShow() {
  clearInterval(intervalID);

  intervalID = setInterval(() => {

    indexInvert ?
      (
        imgDisplay.src = images[indexSlide].image,
        indexSlide < images.length - 1
          ?
          indexSlide++
          : indexSlide = 0
      ) : (
        imgDisplay.src = images[indexSlide].image,
        indexSlide > 0
          ?
          indexSlide--
          : indexSlide = images.length - 1
      )
      updateCircles();
  }, 1000)
};

window.onload = () => {
  IntervalShow();
}

btnInverti.addEventListener('click', () => {
  indexInvert = !indexInvert;
  IntervalShow();
})

btnStopStart.addEventListener('click', () => {
  startStop = !startStop;
  startStop ?
    (
      clearInterval(intervalID)
    ) : (
      IntervalShow()
    )
})

