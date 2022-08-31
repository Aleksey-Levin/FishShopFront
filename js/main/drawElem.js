import backGroundCategories from "./backGroundCategories.js";
import filterCategory from "./filterCategory.js";
import {addCard} from "./addCard.js";

export default function drawElem(){
    $.ajax({
        type: "GET",
        url: "/products/category/",
        data: '',
        success: function (data) {
            let arrayColor = [];
            const categories = document.querySelector('.categories');
            data.forEach(item => {
                let nameCat = item.name;
                let categor = item.name;
                const button = document.createElement('button');
                button.type = "button "
                button.className = "btn  rounded-pill kategor " + categor;
                button.textContent = categor;
                const backGround = backGroundCategories(arrayColor);
                arrayColor.push(backGround);
                button.style.backgroundColor = "#" + backGround;
                categories.appendChild(button);
                button.addEventListener('click', () => {
                    filterCategory(categor);
                })

                item.products.forEach(itemProd => {
                    $.ajax({
                        type: "GET",
                        url: itemProd,
                        data: '',
                        success: function (data) {
                            addCard(data.name, data.image, nameCat, data.url,data["is_visible"]);
                        },
                        failure: function (data2) {
                        },
                    });
                })
            })
            const button = document.createElement('button');
            button.type = "button ";
            button.className = "btn  rounded-pill kategor all";
            button.textContent = "all";
            const backGround = backGroundCategories(arrayColor);
            arrayColor.push(backGround);
            button.style.backgroundColor = "#" + backGround;
            categories.appendChild(button);
            button.addEventListener('click', () => {
                filterCategory("all");
            })

        },
        failure: function (data) {
        },
    });
}
