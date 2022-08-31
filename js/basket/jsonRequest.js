export const jsonRequest = () => {
    let arrayElem = document.querySelectorAll('.app_position');
    let requestObjJson = [];
    arrayElem.forEach(item => {
        let tempObj = {};
        tempObj.url = "pokaNichegoNet"
        tempObj.name = item.querySelector('.position_name').textContent;
        tempObj.price = item.querySelector('.product_price').textContent;
        tempObj.count = item.querySelector('.count').textContent;
        tempObj.image = item.querySelector('.meal_picture').src;
        requestObjJson.push(tempObj);
    })
    return JSON.stringify(requestObjJson);
}

