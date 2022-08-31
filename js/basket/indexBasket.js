import totalPrice from "./totalPrice.js";
import drawCard from "./drawCard.js";
import requestForCard from "./requestForCard.js";
import addFuncCard from "./addFuncCard.js";
import checkNoneValue from "./checkNoneValue.js";
import finalize from "./finalize.js";

requestForCard();
setTimeout(() => addFuncCard(), 500);
totalPrice();
setTimeout(checkNoneValue, 500);

const input = document.querySelectorAll('.modalBasketInput');
input.forEach(item => {
    item.style.display = "inline-block";
})
const allButton = document.querySelectorAll('button');
allButton.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
    });
})

const buttonFinalize = document.querySelector('.check_out');

buttonFinalize.addEventListener('click', (e) => {
    finalize()
});