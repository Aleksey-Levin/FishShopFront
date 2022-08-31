import drawElem from "./drawElem.js";
import {inputSearch} from "./inputSearch.js";
import editBasketIcon from "./editBasketIcon.js";
drawElem();
inputSearch();
editBasketIcon();
if(localStorage.getItem('basket') == undefined) {
    let tempArr = [];
    localStorage.setItem('basket', JSON.stringify(tempArr));
}