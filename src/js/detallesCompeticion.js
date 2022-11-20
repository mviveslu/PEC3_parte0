import data from '../json/data-competitions.json'
import dataPlayers from '../json/data-intesting-players.json'
import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg"
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg"
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg"
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg"
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg"
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg"
import JP from '../../node_modules/country-flag-icons/1x1/JP.svg'
import ES from '../../node_modules/country-flag-icons/1x1/ES.svg'
import DE from '../../node_modules/country-flag-icons/1x1/DE.svg'




const images = [image4,image5,image6,image7,image8,image9];

import {createanElement} from '../../utiles.js';
const valores = window.location.search;
const params = new URLSearchParams(valores);
const idCompeticion = params.get("id");
console.log(idCompeticion);
const prinArticle = document.querySelector("#article-competition");
/*Parámetro mal escrito o nulo */
if(!idCompeticion){
    
}
const resultado = data.find(element => element.idCompetition === idCompeticion);
/*No lo encuentra */
if(resultado.length == 0){
    console.log("array nulo");
    
}
else{ 
    buildFiel(resultado);    
}
function buildFiel(resultado){
    const headerArticle =createanElement("header","article-competition-header");
    const divHeaderInformation=createanElement("div","div-introduction-competition-info")
    const nameCompetition = createanElement("h1","article-competition-name");
    nameCompetition.innerHTML = resultado.competition;
    const introductoryP = createanElement("p","article-competition-introduction");
    introductoryP.innerHTML = resultado.title;
    const countryFlag = createanElement("img","article-competition-flag-country");
    countryFlag.setAttribute("src", getCountryFlag(resultado.location));
    divHeaderInformation.append(nameCompetition,introductoryP,countryFlag)
    headerArticle.append(divHeaderInformation);
    prinArticle.append(headerArticle);
    const sectionField = createanElement("section","handball-court");
    
    const playerList = createanElement("ul","players-court");
    /*Build players*/
    resultado.players.map((element,index) =>{
        const playerIl = createanElement("li","player-element-court")
        const datosPlayer = dataPlayers.find(player => player.id ==element);
        const playerLink = createanElement("a","player-link");
        playerLink.href = "./detallesJugadora.html?id="+datosPlayer.id;
        const imagenPlayer = createanElement("img","image-player-court");
        imagenPlayer.src = images[datosPlayer.idPhoto];
        playerLink.append(imagenPlayer);
        playerIl.append(playerLink);
        playerList.append(playerIl);
    })
    sectionField.append(playerList);
    prinArticle.append(sectionField);
}
/*Devuelve las imágenes de cada país */
function getCountryFlag(country){
    console.log(country);
    /*Possibles paisos de les jugadores */
    if(country=="ES")
        return ES;
    else if(country =="DE")
        return DE;
    else if(country =="JP")
        return JP;
}