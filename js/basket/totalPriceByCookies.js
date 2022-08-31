export default function totalPriceByCookies() {
    let sum = 0;
    JSON.parse(localStorage.getItem('basket')).forEach(item=>{
        sum+=parseFloat(item.price * item.count);
    })
    return sum
}