import totalPrice from "./totalPrice.js";

export default function drawCard(image, name, gram, ed, countText, price, available) {
    const allCard = document.querySelector('.allCard');

    const sectionApp = document.createElement('section');
    sectionApp.className = "app_position";
    allCard.appendChild(sectionApp);

    const imgApp = document.createElement('img');
    imgApp.className = "meal_picture";
    imgApp.src = image;
    sectionApp.appendChild(imgApp);

    const nameAndCount = document.createElement('div');
    nameAndCount.className = "name_and_count";
    sectionApp.appendChild(nameAndCount);

    const positionName = document.createElement('div');
    positionName.className = "position_name";
    positionName.textContent = name;
    nameAndCount.appendChild(positionName);

    const gramsAndCount = document.createElement('div');
    gramsAndCount.className = "gramms_and_count";
    nameAndCount.appendChild(gramsAndCount);

    const grams = document.createElement('p');
    grams.className = "grams";
    grams.textContent = gram + ed;
    gramsAndCount.appendChild(grams);


    const symbol = document.createElement('p');
    symbol.textContent = " x ";
    gramsAndCount.appendChild(symbol);

    const count = document.createElement('p');
    count.className = "count";
    count.textContent = countText;
    gramsAndCount.appendChild(count);

    const positionPrice = document.createElement('div');
    positionPrice.className = "position_price";
    nameAndCount.appendChild(positionPrice);

    const availableCountDiv = document.createElement('div');
    availableCountDiv.className = "availableCountDiv";
    nameAndCount.appendChild(availableCountDiv);

    const availableCount = document.createElement('div');
    availableCount.className = "availableCount gramms_and_count";
    availableCount.textContent = `Доступно: `;
    availableCountDiv.appendChild(availableCount);

    const availableCountP = document.createElement('p');
    availableCountP.className = "availableCountP gramms_and_count";
    availableCountP.textContent = ` ${available}`;
    availableCountDiv.appendChild(availableCountP);

    if(parseInt(availableCountP.textContent) < parseInt(count.textContent)) {
        availableCount.style.color = "red";
        availableCountP.style.color = "red";
    }

    const productPrice = document.createElement('p');
    productPrice.className = "product_price";
    if(ed == "кг"){
        price = parseFloat(price)*1000;
    }
    console.log(`price ${parseFloat(price)}, count: ${countText}, gram: ${gram}`);
    productPrice.textContent = (parseFloat(price)*parseFloat(countText)*parseFloat(gram)).toString() + "P";
    positionPrice.appendChild(productPrice);

    const removeAndAddButtons = document.createElement('div');
    removeAndAddButtons.className = "remove_and_add_buttons";
    sectionApp.appendChild(removeAndAddButtons);

    const textCenter1 = document.createElement('div');
    textCenter1.className = "text-center";
    removeAndAddButtons.appendChild(textCenter1);

    const input1 = document.createElement('input');
    input1.type = "button";
    input1.className = "put_out";
    input1.value = "-"
    textCenter1.appendChild(input1);

    const textCenter2 = document.createElement('div');
    textCenter2.className = "text-center";
    removeAndAddButtons.appendChild(textCenter2);

    const input2 = document.createElement('input');
    input2.type = "button";
    input2.className = "put_in";
    input2.value = "+"
    textCenter2.appendChild(input2);

    const textCenter3 = document.createElement('div');
    textCenter3.className = "text-center";
    removeAndAddButtons.appendChild(textCenter3);

    const input3 = document.createElement('input');
    input3.type = "button";
    input3.className = "remove_position";
    input3.value = "x"
    input3.style = "background-color: #c52125;"
    textCenter3.appendChild(input3);

    totalPrice();
}