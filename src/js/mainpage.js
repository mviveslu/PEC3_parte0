import data from '../json/data-competitions.json'
import interestingPlayers from '../json/data-intesting-players.json'
/*Swiper */
import Swiper from 'swiper/swiper-bundle.esm.js';
// import styles bundle
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
/*Importacion de imágenes*/
import image1Sm from "../img/banner/handball_banner1_sm.jpg"
import image2Sm from "../img/banner/handball_banner2_sm.jpg"
import image3Sm from "../img/banner/handball_banner3_sm.jpg"
const imagesBannerSm = [image1Sm,image2Sm,image3Sm];
import image1Lr from "../img/banner/handball_banner1_lr.jpg"
import image2Lr from "../img/banner/handball_banner2_lr.jpg"
import image3Lr from "../img/banner/handball_banner3_lr.jpg"
const imagesBannerLr = [image1Lr,image2Lr,image3Lr];

import whiteLogo from "../img/logoblanco.png";
import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg"
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg"
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg"
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg"
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg"
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg" 
import image10 from "../img/InterestingPlayers/Coralie_Lassource_wikipediaCommons.jpg" 

const images = [image4,image5,image6,image7,image8,image9,image10];




/*Ordenar las competiciones */
function orderBydateData(){
    return data.sort((a,b) => {
        return new Date(b.startDate) - new Date(a.startDate);
    });
}

/*DOM*/
function createanElement(typeElement, classNameElement){
    const element = document.createElement(typeElement);
    element.setAttribute("class",classNameElement);
    return element;
}
/*Pasar el ID de la competicion para mostrar*/
function competitionDetailsID(event){
    const idLink = event.currentTarget.idLink;
    //window.location.href = "./detalles.html?id="+idLink;
    window.location.replace("./detallesCompeticion.html?id="+idLink);
}
/*Pasar el ID de la JUGADORA para mostrar*/
function playerDetailsID(event){
    console.log(event.currentTarget.idLink);
    const idLink = event.currentTarget.idLink;
    window.location.href = "./detallesJugadora.html?id="+idLink;
    //location.href ="http://stackoverflow.com";
}

function setInterestingPlayers(){
    const titulo = createanElement("h1","interesting-players-cards-title");
    titulo.innerHTML = "Recommended players";
    const divCover = createanElement("div", "cover");
    const leftbutton = createanElement("button", "left");
    leftbutton.setAttribute("aria-label","carrousel-left-button");
    const cards = createanElement("ul", "cards");
    interestingPlayers.map((element,index) => {
        const card = createanElement("li", "card");
        const playerCard = createanElement("div", "player-card");
        const playerCardInformation = createanElement("div", "player-card-information");
        const playerCardtitle = document.createElement("h2");
        playerCardtitle.innerHTML = element.name;
        const imagenPlayer = document.createElement("img","player-card-image");
        imagenPlayer.setAttribute("width","260");
        imagenPlayer.setAttribute("height","233");
        imagenPlayer.setAttribute("loading","lazy");
        imagenPlayer.src = images[element.idPhoto];
        imagenPlayer.setAttribute("alt","player photo");
        const playerCardbio = document.createElement("p");
        playerCardbio.innerHTML = `${element.biography[0].substring(0,70)}...`;
        const buttonplayer = document.createElement("button");
        buttonplayer.addEventListener("click",playerDetailsID);
        buttonplayer.idLink = element.id;
        buttonplayer.innerHTML = "Read more";
        /*Apending*/
        playerCardInformation.append(playerCardtitle,imagenPlayer,playerCardbio,buttonplayer);
        playerCard.append(playerCardInformation);
        card.append(playerCard);
        cards.append(card);
      
    });
    const rightbutton = createanElement("button", "right");
    rightbutton.setAttribute("aria-label","carrousel-right-button");
    
   
    divCover.append(leftbutton,cards,rightbutton);
    
    const divContainer = createanElement("div", "container");
    divContainer.append(titulo,divCover);

    document.body.append(divContainer);
    leftbutton.addEventListener("click", leftScroll);
    rightbutton.addEventListener("click", rightScroll);
}
function leftScroll() {
    const left = document.querySelector(".cards");
    left.scrollBy(200, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".cards");
    right.scrollBy(-200, 0);
  }

/*SWIPER*/  
const orderedData = orderBydateData().slice(0,3);
const banner = document.querySelector("#banner-container");
const divSlider = createanElement("div", "slider-container")
const swiper = createanElement("div", "swiper");
const swipperWrapper = createanElement("div","swiper-wrapper")
const imagesBanner = screen.width<960?imagesBannerSm:imagesBannerLr;
orderedData.map((element,index) => {
    var swiperSlide = createanElement("div","swiper-slide swiper-lazy")
    //swiperSlide.style.backgroundImage = `url(${imagesBanner[index]})`;
    swiperSlide.setAttribute("data-background",imagesBanner[index]);   
    var h2 = document.createElement("h2");
    h2.innerHTML = element.competition;
    var texto = document.createElement("p");
    texto.innerHTML = element.title;
    const buttonReadMore = createanElement("button","button-read-more")
    buttonReadMore.innerHTML ="Read More";
    buttonReadMore.setAttribute("type", "button");
    buttonReadMore.addEventListener("click",competitionDetailsID);
    buttonReadMore.idLink = element.idCompetition;
    const divContent = createanElement("div","div-content-image");
    divContent.append(h2,texto,buttonReadMore);
    swiperSlide.append(divContent);
    swipperWrapper.appendChild(swiperSlide);       
} );
swiper.appendChild(swipperWrapper);
const swiperNavigation = createanElement("div", "swiper-pagination")
const swiperbuttonPrev = createanElement("div","swiper-button-prev")
const swiperbuttonNext = createanElement("div", "swiper-button-next")
swiper.append(swiperNavigation,swiperbuttonPrev,swiperbuttonNext);
divSlider.append(swiper);
banner.appendChild(divSlider);
const swiper2 = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
      lazy: {
        enabled:true,
        loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
        loadPrevNextAmount: 1 //or, if you wish, preload the next 1 images
      }
  });
setInterestingPlayers();
/*add footer*/
const footer = document.createElement("footer");
footer.innerHTML= `
<div class="footer-container">
    <p>2022 &copy; Marta Vives Luis</p>
    <ul>
        <li><a href="./index.html">Front page</a></li>
        <li><a href="./categoria.html">Categories</a></li>
        <li><a href="./detallesJugadora.html">Player's details</a></li>
        <li><a href="./detallesCompeticion.html">Competition's details</a></li>
        <li><a href="./presentacion.html">Presentation</a></li>
        <li><a href="./enlaces.html">Links</a></li>
    </ul>
</div>
<img class="footer-container-logo" src=${whiteLogo} alt="" loading="lazy" >
`;
document.getElementsByClassName("cover-page")[0].append(footer);
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

  

