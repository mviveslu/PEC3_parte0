import data from '../json/data-competitions.json'
import interestingPlayers from '../json/data-intesting-players.json'
/*Swiper */
import Swiper,{ Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/swiper-bundle.esm.js';
// import styles bundle
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
/*Importacion de imágenes*/
import image1 from "../img/handball_banner1.jpg"
import image2 from "../img/handball_banner2.jpg"
import image3 from "../img/handball_banner3.jpg"


import image4 from "../img/InterestingPlayers/Laura_Glauser_wikipediaCommons.jpg"
import image5 from "../img/InterestingPlayers/Nora_Mork_wikipediaCommons.jpg"
import image6 from "../img/InterestingPlayers/Stine_Oftedal_wikipediaCommons.jpg"
import image7 from "../img/InterestingPlayers/Carmen_Martin_wikipediaCommons.jpg"
import image8 from "../img/InterestingPlayers/Nathalie_Hagman_wikipediaCommons.jpg"
import image9 from "../img/InterestingPlayers/Sandra_Toft_2_wikipediaCommons.jpg" 

const images = [image4,image5,image6,image7,image8,image9];


const imagesBanner = [image1,image2,image3];

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
    window.location.replace("./detalles.html?id="+idLink);
}
/*Pasar el ID de la JUGADORA para mostrar*/
function playerDetailsID(event){
    console.log(event.currentTarget.idLink);
    const idLink = event.currentTarget.idLink;
    window.location.href = "./detallesJugadora.html?id="+idLink;
    //location.href ="http://stackoverflow.com";
}

/*SWIPER*/  
const orderedData = orderBydateData().slice(0,3);
const banner = document.querySelector("#banner-container");
const divSlider = createanElement("div", "slider-container")
const swiper = createanElement("div", "swiper");
const swipperWrapper = createanElement("div","swiper-wrapper")
orderedData.map((element,index) => {
    var swiperSlide = createanElement("div","swiper-slide")
    swiperSlide.style.backgroundImage = `url(${imagesBanner[index]})`;   
    var h2 = document.createElement("h2");
    h2.innerHTML = element.competition;
    var texto = document.createElement("p");
    texto.innerHTML = element.title;
    const buttonReadMore = createanElement("button","button-read-more")
    buttonReadMore.innerHTML ="Read More";
    buttonReadMore.setAttribute("type", "button");
    buttonReadMore.addEventListener("click",competitionDetailsID);
    buttonReadMore.idLink = element.idLink;
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
      }
  });

/* */
/*Interesting players*/
function setInterestingPlayers(){
    const titulo = createanElement("h2","interesting-players-cards-title");
    titulo.innerHTML = "Recommended players";
    const divCover = createanElement("div", "cover");
    const leftbutton = createanElement("button", "left");
    
    const cards = createanElement("ul", "cards");
    interestingPlayers.map((element,index) => {
        const card = createanElement("li", "card");
        const playerCard = createanElement("div", "player-card");
        const imgPhoto = createanElement("img");
        const playerCardInformation = createanElement("div", "player-card-information");
        const playerCardtitle = document.createElement("h1");
        playerCardtitle.innerHTML = element.name;
        const imagenPlayer = document.createElement("img","player-card-image");
        imagenPlayer.src = images[element.idPhoto];
        const playerCardbio = document.createElement("p");
        playerCardbio.innerHTML = element.biography[0];
        const buttonplayer = document.createElement("button");
        buttonplayer.addEventListener("click",playerDetailsID);
        buttonplayer.idLink = element.id;
        buttonplayer.innerHTML = "Read more";
        /*Apending*/
        playerCardInformation.append(playerCardtitle,imagenPlayer,playerCardbio,buttonplayer);
        playerCard.append(imgPhoto,playerCardInformation);
        card.append(playerCard);
        cards.append(card);
      
    });
    const rightbutton = createanElement("button", "right");
    
   
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
  setInterestingPlayers();
  

