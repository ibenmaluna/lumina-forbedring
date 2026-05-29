const farver = [
  {
    navn: "Dusty Rose",
    id: "dusty-rose",
    billede: "dusty-rose",
  },
  {
    navn: "Moonlight White",
    id: "moonlight-white",
    billede: "moonlight-white",
  },
  {
    navn: "Sage Green",
    id: "sage-green",
    billede: "sage-green",
  },
  {
    navn: "Lavender Mist",
    id: "lavender-mist",
    billede: "lavender-mist",
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
    nuværendeFarve = indeks;

    /* starter altid på hovedbilledet */
    nuværendeVinkel = 0;

    opdaterProdukt();
  });
});

/* Venstre pil */

pileKnapper[0].addEventListener("click", () => {
  nuværendeVinkel--;

  if (nuværendeVinkel < 0) {
    nuværendeVinkel = vinkler.length - 1;
  }

  opdaterProdukt();
});

