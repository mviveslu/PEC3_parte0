import data from '../json/data-intesting-players.json'
import goldMedal from "../img/icons/Gold.png";
import silverMedal from "../img/icons/Silver.png";
import bronzeMedal from "../img/icons/Bronze.png";
import instagram from "../img/icons/instagram.png";
import facebook from "../img/icons/facebook.png";

import FR from '../../node_modules/country-flag-icons/1x1/FR.svg'
import ES from '../../node_modules/country-flag-icons/1x1/ES.svg'
import CH from '../../node_modules/country-flag-icons/1x1/CH.svg'
import DK from '../../node_modules/country-flag-icons/1x1/DK.svg'
import BV from '../../node_modules/country-flag-icons/1x1/BV.svg'

import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg"
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg"
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg"
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg"
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg"
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg" 
const images = [image4,image5,image6,image7,image8,image9];

function createanElement(typeElement, classNameElement){
    const element = document.createElement(typeElement);
    element.setAttribute("class",classNameElement);
    return element;
}

const valores = window.location.search;
const params = new URLSearchParams(valores);
const idJugadora = params.get("id");
const prinArticle = document.querySelector("#article-player");
/*Parámetro mal escrito o nulo */
if(!idJugadora){
    
}
const resultado = data.find(element => element.id === idJugadora);
/*No lo encuentra */
if(resultado.length == 0){
    console.log("array nulo");
    
}
else{
    console.log(resultado.medals);
    articleHeader(resultado.name,resultado.position,resultado.born, resultado.country, resultado.instagramLink, resultado.facebookLink);
    biography(resultado.biography);
    relatedPlayers(resultado.relatedPlayers);
    individualAwards(resultado.individualAwards);
    medals(resultado.medals);
    
    
    
}
/*Article header */
function articleHeader(namePlayerComplete, positionPlayer, bornPlayer, nameFlag, instagramLink,facebookLink){
    const headerArticle =createanElement("header","article-player-header");
    const divHeaderInformation=createanElement("div","div-introduction-player-info")
    const namePlayer = createanElement("h1","article-player-name");
    namePlayer.innerHTML = namePlayerComplete;
    const introductoryP = createanElement("p","article-player-biography-introduction");
    introductoryP.innerHTML = `${positionPlayer},${bornPlayer}`;
    const countryFlag = createanElement("img","article-player-flag-country");
    countryFlag.setAttribute("src", getCountryFlag(nameFlag));
    /*Social media */
    const socialMediaHeader = createanElement("div","social-media-player");
    const linkInstagram = createanElement("a","link-to-player-instagram");
    linkInstagram.setAttribute("href",instagramLink);
    const logoInstagram = createanElement("img","logo-instagram");
    logoInstagram.setAttribute("src",instagram);

    const linkFacebook = createanElement("a","link-to-player-facebook");
    linkFacebook.setAttribute("href",facebookLink);
    const logoFacebook = createanElement("img","logo-facebook");
    logoFacebook.setAttribute("src",facebook);
    linkFacebook.append(logoFacebook);
    linkInstagram.append(logoInstagram);
    socialMediaHeader.append(linkInstagram,linkFacebook);
    divHeaderInformation.append(namePlayer,introductoryP,countryFlag,socialMediaHeader)
    /**/
    headerArticle.append(divHeaderInformation);
    prinArticle.append(headerArticle);

}
/*Returns the medal image */
function medalColor(medal){
    if(medal ==="Gold")
        return goldMedal;
    else if(medal=="Silver")
        return silverMedal;
    else
        return bronzeMedal;
}
/*Devuelve las imágenes de cada país */
function getCountryFlag(country){
    /*Possibles paisos de les jugadores */
    if(country ==="FR")
        return FR;
    else if(country=="ES")
        return ES;
    else if(country =="BV")
        return BV;
    else if(country =="CH")
        return CH;
    else if(country == "DK")
        return DK;
}
/*Seccion de medallas */
function medals(array){
    const section = createanElement("section","section");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Medals";
    const container = createanElement("div","container");
    const btable = createanElement("div","b-table");
    const divWrapper = createanElement("div","table-wrapper has-mobile-cards");
    const tableWidth = createanElement("table","table is-fullwidth is-striped is-hoverable is-fullwidth");
    const head = document.createElement("thead");
    const rowFields = document.createElement("tr");
    const rowField1 =document.createElement("th");
    const rowField2 =document.createElement("th");
    rowField2.innerHTML = "Event";
    const rowField3 =document.createElement("th");
    rowField3.innerHTML = "Year";
    const rowField4 =document.createElement("th");
    rowField4.innerHTML = "Location";
    rowFields.append(rowField1,rowField2,rowField3,rowField4);
    head.append(rowFields);
    tableWidth.append(head);
    const bodyTable= document.createElement("tbody");  
    array.map(element => {
        const fila = document.createElement("tr");
        const eventMedalImage = createanElement("td","is-image-cell");
        const divImage = createanElement("div","image");
        const medalImage =createanElement("img","is-rounded");
        medalImage.setAttribute("src",medalColor(element.medal));
        divImage.append(medalImage);
        eventMedalImage.append(divImage);
        const eventCompetition = createanElement("td","data-label");
        eventCompetition.innerHTML = element.event;
        const eventYearCompetition = createanElement("td","data-label");
        eventYearCompetition.innerHTML = element.year;
        const eventLocationCompetition = createanElement("td","data-label");
        eventLocationCompetition.innerHTML = element.location;
        fila.append(eventMedalImage,eventCompetition,eventYearCompetition,eventLocationCompetition);
        bodyTable.append(fila);
        tableWidth.append(bodyTable);
    });
    divWrapper.append(tableWidth);
    btable.append(divWrapper);
    container.append(btable);
    section.append(titleSection,container);
    prinArticle.append(section);

}
/*Seccion de premios individuales */
function individualAwards(array){
    const section = createanElement("section","section");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Individual Awards";
    const container = createanElement("div","container");
    const btable = createanElement("div","b-table");
    const divWrapper = createanElement("div","table-wrapper has-mobile-cards");
    const tableWidth = createanElement("table","table is-fullwidth is-striped is-hoverable is-fullwidth");
    const head = document.createElement("thead");
    const rowFields = document.createElement("tr");
    const rowField1 =document.createElement("th");
    const rowField2 =document.createElement("th");
    rowField2.innerHTML = "Year";
    const rowField3 =document.createElement("th");
    rowField3.innerHTML = "Competition";
    rowFields.append(rowField1,rowField2,rowField3);
    head.append(rowFields);
    tableWidth.append(head);
    const bodyTable= document.createElement("tbody");  
    array.map(element => {
        const fila = document.createElement("tr");
        const cellNotext = document.createElement("td");
        const eventCompetition = createanElement("td","data-label");
        eventCompetition.innerHTML = element.year;
        const eventYearCompetition = createanElement("td","data-label");
        eventYearCompetition.innerHTML = element.competition;
        fila.append(cellNotext,eventCompetition,eventYearCompetition);
        bodyTable.append(fila);
        tableWidth.append(bodyTable);
    });
    divWrapper.append(tableWidth);
    btable.append(divWrapper);
    container.append(btable);
    section.append(titleSection,container);
    prinArticle.append(section);

}
/*Seccion de biografía*/
function biography(array){
    const section = createanElement("section","section-biography");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Biografía";
    section.append(titleSection);
    array.map(element => {
        const biographyP = createanElement("p","biography-player-p");
        biographyP.innerHTML = element;
        section.append(biographyP);
    });
    
    prinArticle.append(section);
}
/*Construir listado de jugadoras relacionadas */
function relatedPlayers(array){
    const section = createanElement("section","section-relatedPlayers");
    const titleSection = document.createElement("h2");
    titleSection.innerHTML = "Related Players";
    section.append(titleSection);
    const listRelatedPlayers = createanElement("ul","related-player-list");
    array.map(element => {
         const jugadora = data.find(jugadora =>jugadora.id == element);
        const liRelatedPlayer = createanElement("li","related-player");
        const namePlayer = createanElement("h3","player")
        namePlayer.innerHTML = jugadora.name;
        const linkImagen = createanElement("a","link-to-related-player");
        linkImagen.href = "./detallesJugadora.html?id="+jugadora.id;
        const imagen = createanElement("img","image-related-player");
        imagen.src = images[jugadora.idPhoto];
        linkImagen.append(imagen);
        liRelatedPlayer.append(namePlayer,linkImagen);
        listRelatedPlayers.append(liRelatedPlayer); 
    });
    section.append(listRelatedPlayers);
    prinArticle.append(section);
}