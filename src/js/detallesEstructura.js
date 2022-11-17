import data from '../json/data-competitions.json'
import {createanElement} from '../../utiles.js';
const valores = window.location.search;
const idCompetition = valores.split("=")[1];
const resultado = data.filter(element => element.idLink == idCompetition);

if(resultado.length != 1){
    console.log(resultado);
}
else{
    const titlePage = createanElement("h1","title-page");
    console.log(titlePage);
}