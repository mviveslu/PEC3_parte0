import data from '../json/data-intesting-players.json'

console.log("holaaa");
const valores = window.location.search;
const idCompetition = valores.split("=")[1];

const resultado = data.filter(element => element.idLink == idCompetition);
console.log("idCompetition");
if(resultado.length != 1){
    
}
else{


    const titlePage = createanElement("h1","title-page");
    console.log(titlePage);
}