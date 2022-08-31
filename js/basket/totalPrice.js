export default function totalPrice() {
    let arrayElem = document.querySelectorAll('.product_price');
    let sum = 0;
    arrayElem.forEach(item => {
        sum += parseFloat(item.textContent);
    })
    const appAmount = document.querySelector('.app_amount_total');
    appAmount.textContent = sum.toString();
    return sum;
}