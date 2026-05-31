"use strict"

const farver = [
  {
    navn: "Dusty Rose",
    id: "dusty-rose",
    mappe: "dusty-rose",
  },
  {
    navn: "Moonlight White",
    id: "moonlight-white",
    mappe: "moonlight-white",
  },
  {
    navn: "Sage Green",
    id: "sage-green",
    mappe: "sage-green",
  },
  {
    navn: "Lavender Mist",
    id: "lavender-mist",
    mappe: "lavender-mist",
  },
];

const vinkler = ["product", "front", "left", "right", "top"];

const produktBillede = document.querySelector(".color-product-img");
const farveNavn = document.querySelector(".color-info h3");
const farveKnapper = document.querySelectorAll(".color-cirkle");
const pileKnapper = document.querySelectorAll(".arrow-btn");

let currentFarve = 0;
let currentVinkel = 0;

function opdaterProdukt() {
  const valgtFarve = farver[currentFarve];
  const valgtVinkel = vinkler[currentVinkel];

    produktBillede.src =
    `img/products/${valgtFarve.mappe}/${valgtFarve.mappe}-${valgtVinkel}.png`;

  produktBillede.alt =
    `LUMINA One i farven ${valgtFarve.navn}`;

  farveNavn.textContent = valgtFarve.navn;

  farveKnapper.forEach((knap) => {
    knap.classList.remove("color-selected");
  });

  const aktivKnap = document.querySelector(`#${valgtFarve.id}`);
  aktivKnap.classList.add("color-selected");
}

// farveprikker


farveKnapper.forEach((knap, indeks) => {
  knap.addEventListener("click", () => {
    currentFarve = indeks;

    /* starter altid på hovedbilledet */
    currentVinkel = 0;

    opdaterProdukt();
  });
});

/* Venstre pil */

pileKnapper[0].addEventListener("click", () => {
  currentVinkel--;

  if (currentVinkel < 0) {
    currentVinkel = vinkler.length - 1;
  }

  opdaterProdukt();
});

/* Højre pil */

pileKnapper[1].addEventListener("click", () => {
  currentVinkel++;

  if (currentVinkel >= vinkler.length) {
    currentVinkel = 0;
  }

  opdaterProdukt();
});

