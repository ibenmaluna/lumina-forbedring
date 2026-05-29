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