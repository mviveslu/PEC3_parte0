import data from "../json/data-intesting-players.json";
import goldMedal from "../img/icons/Gold.png";
import silverMedal from "../img/icons/Silver.png";
import bronzeMedal from "../img/icons/Bronze.png";


import FR from "../../node_modules/country-flag-icons/1x1/FR.svg";
import ES from "../../node_modules/country-flag-icons/1x1/ES.svg";
import CH from "../../node_modules/country-flag-icons/1x1/CH.svg";
import DK from "../../node_modules/country-flag-icons/1x1/DK.svg";
import BV from "../../node_modules/country-flag-icons/1x1/BV.svg";

import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg";
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg";
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg";
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg";
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg";
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg";
import image10 from "../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.jpg";

import imageSize300_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_300.jpg";
import imageSize500_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_500.jpg"
import imageSize700_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_700.jpg"
import imageSize900_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_900.jpg"

/*import imageSize300_2 from "../img/InterestingPlayers/Resized/Nora_Mørk_20141115_300.jpg";
import imageSize300_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_300.jpg";
import imageSize300_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_300.jpg";
import imageSize300_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman-IPH-TTH-20160403_300.jpg";
import imageSize300_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_300.jpg";
import imageSize300_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_défenseuse_2015-16_300.jpg";*/

const images = [image4, image5, image6, image7, image8, image9, image10];
//const imagesSized300 = [imageSize300_1,imageSize300_2,imageSize300_3,imageSize300_4,imageSize300_5,imageSize300_6,imageSize300_7];
const imagesSized300 = [imageSize300_1];
const imagesSized500 = [imageSize500_1];
const imagesSized700 = [imageSize700_1];
const imagesSized900 = [imageSize900_1];
function createanElement(typeElement, classNameElement) {
  const element = document.createElement(typeElement);
  element.setAttribute("class", classNameElement);
  return element;
}

const valores = window.location.search;
const params = new URLSearchParams(valores);
const idJugadora = params.get("id");
const prinArticle = document.querySelector("#article-player");
/*Parámetro mal escrito o nulo */
if (!idJugadora) {
  window.location.href = "./detallesJugadora.html?id=001";
}
const resultado = data.find((element) => element.id === idJugadora);
/*No lo encuentra */
if (!resultado) {
  window.location.href = "./detallesJugadora.html?id=001";
} else {
  console.log(resultado.medals);
  articleHeader(
    resultado.name,
    resultado.position,
    resultado.born,
    resultado.country,
    resultado.instagramLink,
    resultado.facebookLink,
    resultado.idPhoto
  );
  biography(resultado.biography);
  relatedPlayers(resultado.relatedPlayers);
  individualAwards(resultado.individualAwards);
  medals(resultado.medals);
}
/*Article header */
function articleHeader(namePlayerComplete,positionPlayer,bornPlayer,nameFlag,instagramLink,facebookLink,positionPhoto){
  const headerArticle = document.getElementsByClassName("article-player-header")[0];
  const photoid = imagesSized300[positionPhoto];
  const photoid2 = imagesSized500[positionPhoto];
  const photoid3 = imagesSized700[positionPhoto];
  const photoid4 = imagesSized900[positionPhoto];
  console.log(positionPhoto);
  
  headerArticle.innerHTML = `
  <picture>
    <source media="(max-width: 375px)"  srcset=${photoid}>
    <source media="(max-width: 950px)"  srcset=${photoid2}>
    <source media="(max-width: 1400px)" srcset=${photoid3}>
    <img src=${photoid4} alt="Player image">
  </picture>
          <div class="div-introduction-player-info">
            <h1 class="article-player-name">
                ${namePlayerComplete}
            </h1>
            <div class="p-with-flag">
                <p class="article-player-biography-introduction">
                    ${positionPlayer}, ${bornPlayer}
                </p>
                <div>
                    <img src = "${getCountryFlag(
                      nameFlag
                    )}" class="article-player-flag-country" alt="country flag">
                </div>
            </div>

            <div class="social-media-player">
                <a href="${instagramLink}">
                    <i class="fa-brands fa-instagram"></i> 
                </a>
                <a href="${facebookLink}">  
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>
    `;
  prinArticle.append(headerArticle);
}
/*Returns the medal image */
function medalColor(medal) {
  if (medal === "Gold") return goldMedal;
  else if (medal == "Silver") return silverMedal;
  else return bronzeMedal;
}
/*Devuelve las imágenes de cada país */
function getCountryFlag(country) {
  /*Possibles paisos de les jugadores */
  if (country === "FR") return FR;
  else if (country == "ES") return ES;
  else if (country == "BV") return BV;
  else if (country == "CH") return CH;
  else if (country == "DK") return DK;
}
/*Seccion de medallas */
function medals(array) {
  const section = createanElement("section", "section");
  const titleSection = document.createElement("h2");
  titleSection.innerHTML = "Medals";
  const container = createanElement("div", "container");
  const btable = createanElement("div", "b-table");
  const divWrapper = createanElement("div", "table-wrapper has-mobile-cards");
  const tableWidth = createanElement(
    "table",
    "table is-fullwidth is-striped is-hoverable is-fullwidth"
  );
  const head = document.createElement("thead");
  const rowFields = document.createElement("tr");
  const rowField1 = document.createElement("th");
  const rowField2 = document.createElement("th");
  rowField2.innerHTML = "Event";
  const rowField3 = document.createElement("th");
  rowField3.innerHTML = "Year";
  const rowField4 = document.createElement("th");
  rowField4.innerHTML = "Location";
  rowFields.append(rowField1, rowField2, rowField3, rowField4);
  head.append(rowFields);
  tableWidth.append(head);
  const bodyTable = document.createElement("tbody");
  array.map((element) => {
    const fila = document.createElement("tr");
    const eventMedalImage = createanElement("td", "is-image-cell");
    const divImage = createanElement("div", "image");
    const medalImage = createanElement("img", "is-rounded");
    medalImage.setAttribute("src", medalColor(element.medal));
    medalImage.setAttribute("alt", "medal photo");
    divImage.append(medalImage);
    eventMedalImage.append(divImage);
    const eventCompetition = createanElement("td", "data-label");
    eventCompetition.innerHTML = element.event;
    const eventYearCompetition = createanElement("td", "data-label");
    eventYearCompetition.innerHTML = element.year;
    const eventLocationCompetition = createanElement("td", "data-label");
    eventLocationCompetition.innerHTML = element.location;
    fila.append(
      eventMedalImage,
      eventCompetition,
      eventYearCompetition,
      eventLocationCompetition
    );
    bodyTable.append(fila);
    tableWidth.append(bodyTable);
  });
  divWrapper.append(tableWidth);
  btable.append(divWrapper);
  container.append(btable);
  section.append(titleSection, container);
  prinArticle.append(section);
}
/*Seccion de premios individuales */
function individualAwards(array) {
  const section = createanElement("section", "section");
  const titleSection = document.createElement("h2");
  titleSection.innerHTML = "Individual Awards";
  const container = createanElement("div", "container");
  const btable = createanElement("div", "b-table");
  const divWrapper = createanElement("div", "table-wrapper has-mobile-cards");
  const tableWidth = createanElement(
    "table",
    "table is-fullwidth is-striped is-hoverable is-fullwidth"
  );
  const head = document.createElement("thead");
  const rowFields = document.createElement("tr");
  const rowField1 = document.createElement("th");
  const rowField2 = document.createElement("th");
  rowField2.innerHTML = "Year";
  const rowField3 = document.createElement("th");
  rowField3.innerHTML = "Competition";
  rowFields.append(rowField1, rowField2, rowField3);
  head.append(rowFields);
  tableWidth.append(head);
  const bodyTable = document.createElement("tbody");
  array.map((element) => {
    const fila = document.createElement("tr");
    const cellNotext = document.createElement("td");
    const eventCompetition = createanElement("td", "data-label");
    eventCompetition.innerHTML = element.year;
    const eventYearCompetition = createanElement("td", "data-label");
    eventYearCompetition.innerHTML = element.competition;
    fila.append(cellNotext, eventCompetition, eventYearCompetition);
    bodyTable.append(fila);
    tableWidth.append(bodyTable);
  });
  divWrapper.append(tableWidth);
  btable.append(divWrapper);
  container.append(btable);
  section.append(titleSection, container);
  prinArticle.append(section);
}
/*Seccion de biografía*/
function biography(array) {
  const section = createanElement("section", "section-biography");
  const titleSection = document.createElement("h2");
  titleSection.innerHTML = "Biography";
  section.append(titleSection);
  array.map((element) => {
    const biographyP = createanElement("p", "biography-player-p");
    biographyP.innerHTML = element;
    section.append(biographyP);
  });

  prinArticle.append(section);
}
/*Construir listado de jugadoras relacionadas */
function relatedPlayers(array) {
  const section = createanElement("section", "section-relatedPlayers");
  const titleSection = document.createElement("h2");
  titleSection.innerHTML = "Related Players";
  section.append(titleSection);
  const listRelatedPlayers = createanElement("ul", "related-player-list");
  array.map((element) => {
    const jugadora = data.find((jugadora) => jugadora.id == element);
    const liRelatedPlayer = createanElement("li", "related-player");
    liRelatedPlayer.innerHTML = `
        <a href="${
          "./detallesJugadora.html?id=" + jugadora.id
        }"class="link-to-related-player">
         <img class="image-related-player" src="${
           images[jugadora.idPhoto]
         }" alt="related">
         <div>
         <span class="player-related-name">
                ${jugadora.name}
            </span>
            <span class="player-related-position">
                ${jugadora.position}
            </span>
         </div>
        </a>
        `;
    listRelatedPlayers.append(liRelatedPlayer);
  });
  section.append(listRelatedPlayers);
  prinArticle.append(section);
}

/*Header*/
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
