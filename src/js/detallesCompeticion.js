import data from '../json/data-competitions.json'
import dataPlayers from '../json/data-intesting-players.json'
import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg"
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg"
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg"
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg"
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg"
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg"
import image10 from "../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.jpg"
import JP from '../../node_modules/country-flag-icons/1x1/JP.svg'
import ES from '../../node_modules/country-flag-icons/1x1/ES.svg'
import DE from '../../node_modules/country-flag-icons/1x1/DE.svg'
import handballCourt from '../img/handball_court.png'


function createanElement(typeElement, classNameElement){
    const element = document.createElement(typeElement);
    element.setAttribute("class",classNameElement);
    return element;
}

const images = [image4,image5,image6,image7,image8,image9,image10];
const valores = window.location.search;
const params = new URLSearchParams(valores);
const idCompeticion = params.get("id");
console.log(idCompeticion);
const prinArticle = document.querySelector("#article-competition");
/*Parámetro mal escrito o nulo */
if(!idCompeticion){
    window.location.href = "./detallesCompeticion.html?id=1";
}
const resultado = data.find(element => element.idCompetition === idCompeticion);
/*No lo encuentra */
if(!resultado){
    window.location.href = "./detallesCompeticion.html?id=1";
}
else{ 
    buildFiel(resultado);    
}
function buildFiel(resultado){
    const headerArticle =createanElement("header","article-competition-header");
    const divHeaderInformation=createanElement("div","div-introduction-competition-info");
    const divHeaderFlagP=createanElement("div","div-p-flag");
    const nameCompetition = createanElement("h1","article-competition-name");
    nameCompetition.innerHTML = resultado.competition;
    const introductoryP = createanElement("p","article-competition-introduction");
    introductoryP.innerHTML = resultado.title;
    const countryFlag = createanElement("img","article-competition-flag-country");
    countryFlag.setAttribute("src", getCountryFlag(resultado.location));
    divHeaderFlagP.append(introductoryP,countryFlag);
    const duration = document.createElement("span");
    duration.innerHTML = `Started: ${resultado.startDate} - Finished: ${resultado.endingDate}`;
    divHeaderInformation.append(nameCompetition,divHeaderFlagP,duration)
    headerArticle.append(divHeaderInformation);
    prinArticle.append(headerArticle);
    const sectionField = createanElement("section","handball-court");


    
    sectionField.innerHTML = `
        <div class="image-player-court-contain">
            <div class="row line-one" ></div>
            <div class="row line-two" ></div>
            <div class="row line-three" ></div>
            <div class="row line-four" ></div>
            <img src="${handballCourt}">
        </div>
    `
    prinArticle.append(sectionField);
    const rowLineOne = document.getElementsByClassName("row line-one")[0];
    const rowLineTwo = document.getElementsByClassName("row line-two")[0];
    const rowLineThree = document.getElementsByClassName("row line-three")[0];
    const rowLineFour = document.getElementsByClassName("row line-four")[0];

    resultado.players.map((element,index) =>{
        const datosPlayer = dataPlayers.find(player => player.id == element);
        let divPlayer ="";
        /*Primera Linea */
        if(index < 3){
            if(index == 0){
                divPlayer = "player extreme-left";
            } 
            else if(index == 1){
                divPlayer = "player goalkeeper";
            }
            else{
                divPlayer = "player extreme-right";
            }
            const divPlayer2 = createanElement("div",divPlayer);
            divPlayer2.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`
        rowLineOne.append(divPlayer2);
        }
    else if(index ==3 ){
        const divPlayer2 = createanElement("div","player pivot");
        divPlayer2.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`
        rowLineTwo.append(divPlayer2);
    }
    else if(index < 6){
        if(index == 4){
            divPlayer = "player left-court";
        }
        else{
            divPlayer = "player right-backcourt";
        }
        
        const divPlayer2 = createanElement("div",divPlayer);
        divPlayer2.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`
        rowLineThree.append(divPlayer2);
    }
    else{
        //buildPlayer("player pivot", datosPlayer.idPhoto, datosPlayer.id, divRow4);
        const divPlayer2 = createanElement("div","player pivot2");
        divPlayer2.innerHTML = `
                <a href=./detallesJugadora.html?id=${datosPlayer.id}>
                    <img src= ${images[datosPlayer.idPhoto]}>
                </a>`
        rowLineFour.append(divPlayer2);
        
    }
});

    prinArticle.append(sectionField);
}
/*Build the circle player link */
function buildPlayer(classPlayer, idPhoto, idJugadora, divRow){
    divPlayer = createanElement("div",classPlayer);
    const playerLink = createanElement("a","player-link");
    const imagenPlayer = createanElement("img","image-player-court");
    imagenPlayer.src = images[idPhoto];
    playerLink.href = "./detallesJugadora.html?id="+idJugadora;
    playerLink.append(imagenPlayer);
    divPlayer.append(playerLink);
    divRow.append(divPlayer);

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
 /*Header*/
 const toggleButton = document.getElementById('button-menu')
 const navWrapper = document.getElementById('nav')
 
 toggleButton.addEventListener('click',() => {
   toggleButton.classList.toggle('close')
   navWrapper.classList.toggle('show')
 })
 
 navWrapper.addEventListener('click',e => {
   if(e.target.id === 'nav'){
     navWrapper.classList.remove('show')
     toggleButton.classList.remove('close')
   }
 })