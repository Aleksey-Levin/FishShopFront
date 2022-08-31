import addFuncCard from "./addFuncCard.js";

export default function editCookies(id,count){
    const arrCookies = JSON.parse(localStorage.getItem('basket'))
    if(arrCookies.length > id){
        arrCookies[id].count+=count;
        localStorage.setItem('basket', JSON.stringify(arrCookies));
    }
}