const homeButton = document.querySelector(".logo-div");

const items = [
  {
    image: "../images/popartandywarholmarilyn1865x577.crop_768x577_48,0.png",
    text: "Izložba Andy Warhol i boja od 2. svibnja do 31. kolovoza 2019",
  },
  {
    image: "../images/art-deco-3.avif",
    text: "Izložba Art deco od 2. veljače do 31. srpnja 2018.",
  },
  {
    image: "../images/bauhaus3.jpg",
    text: "Izložba Ivan Mažuranić od 23. lipnja do 20. kolovoza 2018.",
  },
  {
    image: "../images/zmija2.avif",
    text: "Najotrovnije zmije svijeta od 18. lipnja do 31. kolovoza 2018",
  },
  {
    image: "../images/bauhaus3.jpg",
    text: "Žene Bauhausa u Hrvatskoj 28. srpnja do 1. studenog 2018.",
  },
];
const photo = document.getElementById("photo");
const title = document.getElementById("text");

console.log(text);

title.innerText = items[0].text;
photo.src = items[1].image;

const buttonPrev = document.getElementById("slider-button-prev");
const buttonNext = document.getElementById("slider-button-next");

buttonNext.addEventListener("click", increase);
let i = 0;

function increase() {
  if (i === items.length - 1) {
    // hero.classList.toggle("out")
    // hero.classList.toggle("in")
    i = 0;
    title.innerText = items[i].text;
    photo.src = items[i].image;

    // listaBotones.children[i].classList.toggle("rojo")
    // listaBotones.children[items.length - 1].classList.toggle("rojo")
  } else {
    // hero.classList.toggle("out")
    // hero.classList.toggle("in")
    console.log("hola");
    i++;
    title.innerText = items[i].text;
    photo.src = items[i].image;

    //  listaBotones.children[i].classList.toggle("rojo")
    //  listaBotones.children[i-1].classList.toggle("rojo")
  }
}
buttonPrev.addEventListener("click", decrease);

function decrease() {
  if (i === 0) {
    i = items.length - 1;
    title.innerText = items[i].text;
    photo.src = items[i].image;
  } else {
    i--;
    title.innerText = items[i].text;
    photo.src = items[i].image;
    console.log("hola");
  }
}

//document.getElementById("myImageId").src = "newSource.png";
