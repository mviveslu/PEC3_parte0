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
import imageSize300_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_300.jpg";
import imageSize300_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_300.jpg";
import imageSize300_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_300.jpg";
import imageSize300_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_300.jpg";
import imageSize300_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_300.jpg";
import imageSize300_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_300.jpg";
import imageSize500_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_500.jpg";
import imageSize500_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_500.jpg";
import imageSize500_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_500.jpg";
import imageSize500_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_500.jpg";
import imageSize500_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_500.jpg";
import imageSize500_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_500.jpg";
import imageSize700_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_700.jpg";
import imageSize700_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_700.jpg";
import imageSize700_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_700.jpg";
import imageSize700_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_700.jpg";
import imageSize700_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_700.jpg";
import imageSize700_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_700.jpg";
import imageSize900_1 from "../img/InterestingPlayers/Resized/Laura_Glauser_20160131_0_900.jpg";
import imageSize900_2 from "../img/InterestingPlayers/Resized/Nora_Mork_20141115_900.jpg";
import imageSize900_4 from "../img/InterestingPlayers/Resized/Carmen_Martin_4_20171108_900.jpg";
import imageSize900_5 from "../img/InterestingPlayers/Resized/Nathalie_Hagman_IPH_TTH_20160403_900.jpg";
import imageSize900_6 from "../img/InterestingPlayers/Resized/Sandra_Toft_2_20181118_900.jpg";
import imageSize900_7 from "../img/InterestingPlayers/Resized/Coralie_Lassource-Meilleure_defenseuse_2015-16_900.jpg";
import imageSize300_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_300.jpg";
import imageSize500_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_500.jpg";
import imageSize700_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_700.jpg";
import imageSize900_3 from "../img/InterestingPlayers/Resized/Stine_Oftedal_20170519_900.jpg";

const images = [image4, image5, image6, image7, image8, image9, image10];
const imagesSized300 = [
  imageSize300_1,
  imageSize300_2,
  imageSize300_3,
  imageSize300_4,
  imageSize300_5,
  imageSize300_6,
  imageSize300_7,
];
const imagesSized500 = [
  imageSize500_1,
  imageSize500_2,
  imageSize500_3,
  imageSize500_4,
  imageSize500_5,
  imageSize500_6,
  imageSize500_7,
];
const imagesSized700 = [
  imageSize700_1,
  imageSize700_2,
  imageSize700_3,
  imageSize700_4,
  imageSize700_5,
  imageSize700_6,
  imageSize700_7,
];
const imagesSized900 = [
  imageSize900_1,
  imageSize900_2,
  imageSize900_3,
  imageSize900_4,
  imageSize900_5,
  imageSize900_6,
  imageSize900_7,
];

function createanElement(typeElement, classNameElement) {
  const element = document.createElement(typeElement);
  element.setAttribute("class", classNameElement);
  return element;
}
function articleHeader(
  namePlayerComplete,
  positionPlayer,
  bornPlayer,
  nameFlag,
  instagramLink,
  facebookLink,
  positionPhoto
) {
  const headerArticle = document.getElementsByClassName(
    "article-player-header"
  )[0];
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
                    )}" class="article-player-flag-country" alt="country flag" loading="lazy" width="40" height="40">
                </div>
            </div>
            <div class="social-media-player">
                <a href="${instagramLink}" aria-label="Access directly to the player's instagram">
                  <svg width="40px" height="40px" viewBox="0 0 48 48" version="1.1" id="Shopicons" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xml:space="preserve" fill="#265290">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_iconCarrier"> <style>.st1{fill:#fff}.st2,.st3{fill:none;stroke:#666;stroke-width:4;stroke-miterlimit:10}.st3{stroke-width:6}</style> <g id="instagram_00000127030415805702900630000013396224003006281109_"> <path d="M0-.019h48v48H0v-48z" fill="none"/> <path d="M36.019 8A3.986 3.986 0 0 1 40 11.981v24.038A3.986 3.986 0 0 1 36.019 40H11.981A3.986 3.986 0 0 1 8 36.019V11.981A3.986 3.986 0 0 1 11.981 8h24.038m0-4H11.981A7.98 7.98 0 0 0 4 11.981v24.038A7.98 7.98 0 0 0 11.981 44h24.038A7.98 7.98 0 0 0 44 36.019V11.981A7.98 7.98 0 0 0 36.019 4z"/> <path d="M24 34c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-16c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"/> <circle cx="35" cy="13" r="2"/> </g> </g>
                  </svg> 
                </a>
                <a href="${facebookLink}" aria-label="Access directly to the player's facebook">  
                  <svg fill="#265290" width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#265290">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"/> </g>
                  </svg>
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
    const sizeMedal = screen.width<769?"96":"24";
    const medalImage = createanElement("img", "is-rounded");
    medalImage.setAttribute("src", medalColor(element.medal));
    medalImage.setAttribute("width",sizeMedal);
    medalImage.setAttribute("height",sizeMedal);
    medalImage.setAttribute("alt", "medal photo");
    medalImage.setAttribute("loading", "lazy");
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
