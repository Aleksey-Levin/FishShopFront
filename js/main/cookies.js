export function cookies(url, gram,ed, price, count){
    if(localStorage.getItem('basket') == undefined) {
        let tempArr = [];
        localStorage.setItem('basket', JSON.stringify(tempArr));
    }
    if(gram.toString() != "NaN" && url.toString() != "NaN"){

    let arrObj = JSON.parse(localStorage.getItem('basket'));
    let tempObj = {
        urls: url,
        count: count,
        gram: gram,
        ed: ed,
        price: price,
        maxCount:1,
    }
    if(arrObj.length > 0){
        tempObj.id = arrObj.length + 1;
    }
    else{
        tempObj.id = 1;
    }
    let flag = true;
    for(let i = 0; i < arrObj.length; i++){
        if(arrObj[i].urls == url){
            if(arrObj[i].gram != gram){
                arrObj[i].gram = gram;
                arrObj[i].count = 0;
            }
            arrObj[i].count++;
            flag = false;
        }
    }
    if(flag){
        arrObj.push(tempObj);
    }
    localStorage.setItem('basket', JSON.stringify(arrObj));}
}