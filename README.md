# LUMINA Audio

## Kort beskrivelse af projektet

Dette projekt er udviklet som en del af 1. semester på Multimediedesign.

Projektet består af en landingpage af højtaleren **LUMINA One**. Formålet med projektet er at præsentere produktet gennem et visuelt design og skabe en interaktiv brugeroplevelse, ved at forbedre 1 case fra starten af semesteret

Brugeren kan:

- Læse om produktets funktioner og specifikationer
- Udforske forskellige stemningsbilleder
- Skifte mellem fire forskellige farver
- Se produktet fra forskellige vinkler ved hjælp af navigationspile

Projektet er udviklet med:

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- GitHub

---

## Fil- og mappestruktur

```text
lumina-forbedring/
│
├── index.html
├── script.js
│
├── css/
│   └── style.css
│
├── img/
│   ├── products/
│   ├── icons/
│   ├── logo/
│   └── stemning/
│
└── README.md
```

### HTML

`index.html` indeholder hele sidens struktur og indhold.

Siden er opbygget af flere sektioner, blandt andet:

- Hero section
- Benefits section
- Mood section
- Produktgalleri
- Specifikationer
- Footer

Jeg har anvendt semantiske HTML-elementer som `<section>`, `<article>`, `<main>` og `<footer>` for at skabe en tydelig struktur.

### CSS

Mappen `css` indeholder projektets styling.

I `style.css` har jeg blandt andet arbejdet med:

- CSS variables
- Flexbox
- CSS Grid
- Typografi
- Farvepalette
- Layout og spacing


### JavaScript

`script.js` styrer den interaktive del af kodningen.

JavaScript bruges til:

- At skifte mellem produktets farver
- At skifte mellem forskellige produktvinkler
- At opdatere billeder og tekst 
- At reagere på brugerens klik gennem event listeners

### Billeder

Alle billeder er placeret i mappen `img`.

Billederne er organiseret i undermapper:

- products
- icons
- logo
- stemning

Denne struktur gør projektet lettere at vedligeholde og finde rundt i.

---

## Validering af CSS

Jeg har valideret projektets CSS-fil (`style.css`) ved hjælp af W3C CSS Validator.

Under valideringen fandt jeg enkelte  og skrivefejl i brugen af CSS-variabler. som f.eks tastefejl i rgba kode under color gallery , tastefejl i variabler, Disse fejl blev rettet, hvorefter filen blev valideret igen.



## Validering af HTML

Jeg har valideret projektets HTML-fil (`index.html`) ved hjælp af W3C Markup Validation Service.

Valideringen blev anvendt til at kontrollere:

- Korrekt HTML-struktur
- Korrekt brug af elementer
- Manglende attributter
- Generelle syntaksfejl

den meldte fejl, på nogle af mine mapper (stemningbilleder, det blev rettet og er nu valideret)


## JavaScript datastruktur

Projektet arbejder med et array kaldet `farver`.

```javascript
const farver = [
  {
    navn: "Dusty Rose",
    id: "dusty-rose",
    mappe: "dusty-rose",
  },
];
```

Arrayet indeholder objekter, hvor hvert objekt repræsenterer en farvevariant af produktet.

Hvert objekt indeholder:

- `navn`
- `id`
- `mappe`

Derudover anvendes et array kaldet `vinkler`:

```javascript
const vinkler = ["product", "front", "left", "right", "top"];
```

Jeg har valgt denne datastruktur, fordi den gør det nemt at håndtere flere produktvarianter og vinkler. Hvis der senere skal tilføjes flere farver eller billeder, kan det gøres ved at tilføje nye værdier til arraysene uden at ændre resten af koden.

---

## Eksempel på JavaScript-kode

```javascript
function opdaterProdukt() {
  const valgtFarve = farver[currentFarve];
  const valgtVinkel = vinkler[currentVinkel];

  produktBillede.src =
    `img/products/${valgtFarve.mappe}/${valgtFarve.mappe}-${valgtVinkel}.png`;

  produktBillede.alt =
    `LUMINA One i farven ${valgtFarve.navn}`;

  farveNavn.textContent = valgtFarve.navn;
}
```

### Hvad gør koden?

Funktionen `opdaterProdukt()` er vigtigt for projektets måde at være interaktiv på.

Først hentes den aktuelle farve fra arrayet `farver`.

Derefter hentes den aktuelle vinkel fra arrayet `vinkler`.

Funktionen sammensætter derefter stien til det korrekte produktbillede og opdaterer billedets `src`-attribut.

Efterfølgende opdateres billedets `alt`-tekst samt navnet på den valgte farve.

Funktionen kaldes hver gang brugeren klikker på en farveknap eller en af pilene.


---

## Refleksion

Gennem projektet har jeg arbejdet med samspillet mellem HTML, CSS og JavaScript.

Jeg har fået erfaring med:

- Opbygning af semantisk HTML
- Styling med CSS Grid og Flexbox
- Brug af CSS variables
- DOM-manipulation i JavaScript
- Arrays og objekter som datastrukturer
- Event listeners og brugerinteraktion

Projektet har givet mig en bedre forståelse for, hvordan JavaScript kan bruges til at skabe dynamiske og interaktive brugeroplevelser. dog er der stadig lang vej endnu, og jeg har stadig meget at lære, samt meget at huske.. den ene dag giver det mening og sidder fast og virker ligepludselig logisk. den anden dag, tager det længere tid for at forstå det jeg egentlig forstod igår... men jeg har helt klart fået en bedre grundlæggene forståelse for kodning .

---

## Forfatter

**Iben Bjerregaard**

Multimediedesign – 1. semester