import totalPriceByCookies from "../basket/totalPriceByCookies.js";

export default function editBasketIcon(){
    const basket = document.querySelector('.basket');
    const countGoods = document.querySelector('.countGoods');
    const costOrder = document.querySelector('.costOrder');
    basket.addEventListener('click',()=>{
        countGoods.textContent = " " + JSON.parse(localStorage.getItem('basket')).length.toString();
        costOrder.textContent = " " + totalPriceByCookies().toString();
    });
}