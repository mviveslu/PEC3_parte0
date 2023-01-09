import data from "../json/data-intesting-players.json";
import goldMedal from "../img/icons/Gold.png";
import silverMedal from "../img/icons/Silver.png";
import bronzeMedal from "../img/icons/Bronze.png";
import FR from "../../node_modules/country-flag-icons/1x1/FR.svg";
import ES from "../../node_modules/country-flag-icons/1x1/ES.svg";
import CH from "../../node_modules/country-flag-icons/1x1/CH.svg";
import DK from "../../node_modules/country-flag-icons/1x1/DK.svg";
import BV from "../../node_modules/country-flag-icons/1x1/BV.svg";
import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.webp";
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.webp";
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.webp";
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.webp";
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.webp";
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.webp";
import image10 from "../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.webp";
import imageSize300_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_300.jpg"
import imageSize300_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_300.jpg"
import imageSize300_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_300.jpg"
import imageSize300_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_300.jpg"
import imageSize300_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_300.jpg"
import imageSize300_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_300.jpg"
import imageSize500_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_500.jpg"
import imageSize500_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_500.jpg"
import imageSize500_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_500.jpg"
import imageSize500_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_500.jpg"
import imageSize500_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_500.jpg"
import imageSize500_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_500.jpg"
import imageSize700_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_700.jpg"
import imageSize700_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_700.jpg"
import imageSize700_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_700.jpg"
import imageSize700_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_700.jpg"
import imageSize700_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_700.jpg"
import imageSize700_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_700.jpg"
import imageSize900_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_900.jpg"
import imageSize900_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_900.jpg"
import imageSize900_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_900.jpg"
import imageSize900_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_900.jpg"
import imageSize900_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_900.jpg"
import imageSize900_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_900.jpg"
import imageSize300_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_300.jpg"
import imageSize500_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_500.jpg"
import imageSize700_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_700.jpg"
import imageSize900_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_900.jpg"

const images = [image4, image5, image6, image7, image8, image9, image10];
const imagesSized300 = [imageSize300_1,imageSize300_2,imageSize300_3,imageSize300_4,imageSize300_5,imageSize300_6,imageSize300_7];
const imagesSized500 = [imageSize500_1,imageSize500_2,imageSize500_3,imageSize500_4,imageSize500_5,imageSize500_6,imageSize500_7];
const imagesSized700 = [imageSize700_1,imageSize700_2,imageSize700_3,imageSize700_4,imageSize700_5,imageSize700_6,imageSize700_7];
const imagesSized900 = [imageSize900_1,imageSize900_2,imageSize900_3,imageSize900_4,imageSize900_5,imageSize900_6,imageSize900_7];

function createanElement(typeElement, classNameElement) {
  const element = document.createElement(typeElement);
  element.setAttribute("class", classNameElement);
  return element;
}
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
                    )}" class="article-player-flag-country" alt="country flag" loading="lazy">
                </div>
            </div>

            <div class="social-media-player">
                <a href="${instagramLink}" aria-label="Access directly to the player's instagram">
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>instagram</title>
                  <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path>
                </svg>
                
                    
                </a>
                <a href="${facebookLink}" aria-label="Access directly to the player's facebook">  
                <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                      <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                      <defs>
                      <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#18ACFE"/>
                      <stop offset="1" stop-color="#0163E0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                
            </div>
        </div>
    `;
  prinArticle.append(headerArticle);
  /*  
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-facebook"></i>
  
  */
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
    medalImage.setAttribute("loading","lazy");
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
         <img class="image-related-player" loading="lazy" src="${
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
