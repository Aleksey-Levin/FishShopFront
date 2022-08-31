import drawCard from "./drawCard.js";
import requestForCard from "./requestForCard.js";
import addFuncCard from "./addFuncCard.js";

export default function reDraw(){
    const arrApp = document.querySelectorAll('.app_position');
    arrApp.forEach(item=>item.remove());
    let arrLocalApp = JSON.parse(localStorage.getItem('basket'));
    arrLocalApp = arrLocalApp.map((item,index)=>{
        item.id = index+1;
        return item;
    })
    localStorage.setItem('basket',JSON.stringify(arrLocalApp))
    requestForCard();
    setTimeout(()=>addFuncCard(),500);
}