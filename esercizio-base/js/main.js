const images = [
  {
    image : "./img/01.webp",
    title : "Marvel's Spiderman Miles Morale",
    text  : "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image : "./img/02.webp",
    title : "Ratchet & Clank: Rift Apart",
    text  : "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image : "./img/03.webp",
    title : "Fortnite",
    text  : "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image : "./img/04.webp",
    title : "Stray",
    text  : "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image : "./img/05.webp",
    title : "Marvel's Avengers",
    text  : "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// scorciatoia per prendere tutto dinamicamente
const $one = document.getElementById.bind(document);

const imgElems = [];

// todo__________________________________________________
// prendo i bottoni 
const btnAvanti       = $one("btnAvanti");            
const btnIndietro     = $one("btnIndietro");          
// prendo il div per appendere
const divContainerGeneral = $one("divContainerGeneral");   
  console.log(divContainerGeneral);        
// todo__________________________________________________

images.forEach(curImage => {

// -------------------------------------------------------------
  // conatiner all 
  const containerAll        = document.createElement("div");
  containerAll.className    = "my-carousel-item";     //! ACTIVE

    divContainerGeneral.append(containerAll);
    
  // Immagini
  const imgElem             = document.createElement("img");
    imgElem.className       = "img-fluid";
    imgElem.src             = `${curImage.image}`;
    imgElem.alt             = `${curImage.title}`;

    containerAll.append(imgElem);

    // container description
    const containerTxt = document.createElement("div");
      containerTxt.className = "item-description px-3";
      containerAll.append(containerTxt)

    // titolo
    const titoloElem        = document.createElement("h2");
      titoloElem.innerText  = `${curImage.title}`;

      containerTxt.append(titoloElem);

    // paragrafo
    const paraElem          = document.createElement("p");
      paraElem.innerText    = `${curImage.text}`;
      
      containerTxt.append(paraElem);

      imgElems.push(containerAll);
// -------------------------------------------------------------

});

imgElems[0].classList.add("active");

let indexActive = 0;


setInterval(() => {
  if (indexActive < images.length -1) {

    imgElems[indexActive].classList.remove("active");
    indexActive++
    imgElems[indexActive].classList.add("active");
  
  } else {
  
    indexActive = 0;
    
    imgElems[imgElems.length - 1].classList.remove("active");
    imgElems[indexActive].classList.add("active");
  
  }
}, 2000);
btnAvanti.addEventListener('click', () => {

if (indexActive < images.length -1) {

  imgElems[indexActive].classList.remove("active");
  indexActive++
  imgElems[indexActive].classList.add("active");

} else {

  indexActive = 0;
  
  imgElems[imgElems.length - 1].classList.remove("active");
  imgElems[indexActive].classList.add("active");

}
});

btnIndietro.addEventListener('click', () => {

  if (indexActive > 0) {
      imgElems[indexActive].classList.remove("active");
      indexActive--;
      imgElems[indexActive].classList.add("active");

  } else {

      indexActive = imgElems.length - 1;
      imgElems[0].classList.remove("active");
      imgElems[indexActive].classList.add("active");
      
  }
});








