import {cookies} from "./cookies.js";
import editBasketIcon from "./editBasketIcon.js";

export default function createModuleWindow(url, nameText, priceFloat, gramme, countInt, imgLink, descriptionText, category, price) {
    function strFromNum(str){
        return [...str]
            .map(i => {if(isFinite(i) == false && i != "."){return i}else{return " "}})
            .join("")
            .split("")
            .filter(i => i != " ")
            .map(i => i)
            .join('')
    }

    function numFromStr(str) {
        return [...str]
            .map(i => {
                if (isFinite(i) == true || i == ".") {
                    return i
                } else {
                    return " "
                }
            })
            .join("")
            .split("")
            .filter(i => i != " ")
            .map(i => i)
    }

    const modalContent = document.querySelector('.modal-content');

    const imgTop = document.querySelector('.card-img-top-mdl');
    imgTop.src = imgLink;

    const cardCategory = document.querySelector('.card-category')
    cardCategory.textContent = category;


    const cardPrice = document.querySelector('.price');
    cardPrice.textContent = `Не выбрано`;

    const cardGramme = document.querySelector('.grammeBlock');
    const gram = cardGramme.querySelector('.gramme');
    const gramCount = cardGramme.querySelector('.grammeCount');
    gramCount.textContent = "Не выбрано";
    const inputCard = modalContent.querySelectorAll('input');
    inputCard.forEach(item => {
            item.remove();
        }
    )
    const errorTextP = document.querySelector('.errorText');
    let grammeInt = gramme.map(item => parseInt(item));
    grammeInt.sort((function(a, b) {
        return a - b;
    }));
    gramme = grammeInt.map(item => item.toString());
    gramme.forEach((item, index) => {
        const inp = document.createElement('input');
        inp.className = "btn btn-dark rounded-pill gramme grammembl mb-3";
        inp.type = "submit";
        inp.value = parseFloat(item) > 1000 ? `${item / 1000}кг` : `${item}г`;
        cardGramme.appendChild(inp);
        inp.addEventListener('click', () => {
            gramCount.textContent = inp.value.toString();
            errorTextP.textContent = "";
            let gram = parseFloat(inp.value);
            if(inp.value.indexOf("кг")!=-1){
                gram=gram*1000;
            }
            cardPrice.textContent = (gram*priceFloat).toString() + "Р";
        })
    })
    const buttonForRemove = document.querySelector('.cart');
    buttonForRemove.remove();
    const buttonToCart = document.createElement('button');
    buttonToCart.type = "button";
    buttonToCart.className = "btn btn-dark rounded-pill cart mb-2";
    buttonToCart.style.backgroundColor = "rgb(160, 0, 0)";
    buttonToCart.textContent = "В корзину";
    cardGramme.insertAdjacentElement("afterend", buttonToCart);
    const description = document.querySelector('.description');
    const goodTextElem = document.querySelector('.goodText');
    goodTextElem.textContent = "";
    description.textContent = descriptionText;

    function handleClick() {
        const gram = document.querySelector('.grammeCount');
        if (gramCount.textContent.match(/\d+/) == null) {
            errorTextP.textContent = "Выберите необходимую граммовку";
        } else {
            cookies(url, parseFloat(numFromStr(gramCount.textContent).join('')),strFromNum(gramCount.textContent), parseFloat(numFromStr(cardPrice.textContent).join('')), 1);
            goodTextElem.textContent = "Успешно добавлено в корзину";
            editBasketIcon();
        }
    }

    buttonToCart.addEventListener('click', handleClick);

}