import totalPrice from "./totalPrice.js";
import checkNoneValue from "./checkNoneValue.js";
import editCookies from "./editCookies.js";
import deleteCookies from "./deleteCookies.js";
import reDraw from "./reDraw.js";

export default function addFuncCard(){
    let arrayElem = document.querySelectorAll('.app_position');
    arrayElem.forEach((item,index) => {
        const minusButton = item.querySelector('.put_out')
        const plusButton = item.querySelector('.put_in')
        const deleteButton = item.querySelector('.remove_position');
        const available = item.querySelector('.availableCountP');
        const availableDiv = item.querySelector('.availableCount');
        const countValue = item.querySelector('.count');
        const priceString = item.querySelector('.product_price');

        let priceOfOneProduct = (parseInt(priceString.textContent) / parseInt(countValue.textContent))

        minusButton.addEventListener('click', () => {
            let count;
            if (countValue.textContent) {
                available.style.color = "greenyellow";
                availableDiv.style.color = "greenyellow";
                count = parseFloat(countValue.textContent);
                count--;
                editCookies(index,-1);
                if (count <= 0) {
                    item.style.display = "none"
                    checkNoneValue();
                    deleteCookies(index);
                }
                countValue.textContent = String(count);
                priceString.textContent = String(priceOfOneProduct * count) + "Р";
                totalPrice();
            }
        })
        plusButton.addEventListener('click', () => {
            let count;
            if (countValue.textContent) {
                if(parseInt(countValue.textContent) < parseInt(available.textContent)){
                    count = parseInt(countValue.textContent);
                    count++;
                    editCookies(index,1);
                    countValue.textContent = String(count);
                    priceString.textContent = String(priceOfOneProduct * count) + "Р";
                    totalPrice();
                }
                else{
                    available.style.color = "red";
                    availableDiv.style.color = "red";

                }
            }
        })
        deleteButton.addEventListener('click', () => {
            item.remove();
            totalPrice();
            checkNoneValue();
            deleteCookies(index);
            reDraw();
        })
    })
}