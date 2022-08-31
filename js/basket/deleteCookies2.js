export default function deleteCookies2(id){
    let arrCookies = JSON.parse(localStorage.getItem('basket'));
    if(arrCookies.length > 1){
        delete arrCookies[id];
    }
    else{
        arrCookies = [];
    }
    localStorage.setItem('basket', JSON.stringify(arrCookies));
}