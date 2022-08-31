export default function deleteCookies(id){
    let arrCookies = JSON.parse(localStorage.getItem('basket'));
    if(arrCookies.length > 1){
        arrCookies.splice(id,1);
    }
    else{
        arrCookies = [];
    }
    localStorage.setItem('basket', JSON.stringify(arrCookies));
}