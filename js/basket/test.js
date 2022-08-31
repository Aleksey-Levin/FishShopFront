import totalPrice from "./totalPrice.js";
import checkNoneValue from "./checkNoneValue.js";

export default function test(urlOrder) {
    JSON.parse(localStorage.getItem('basket')).forEach(item => {
        let url;
        $.ajax({
            type: "GET",
            url: item.urls,
            data: '',
            success: function (data) {
                data['products_weights'].forEach(item3 => {
                    $.ajax({
                        type: "GET",
                        url: item3,
                        data: '',
                        success: function (data) {
                            if (data.weight == item.gram) {
                                url = data.url;
                                $.ajax({
                                    type: "POST",
                                    url: `/orders/goods/`,
                                    data: {
                                        "csrfmiddlewaretoken": window.CSRF_TOKEN,
                                        "quantity": item.count,
                                        "order": urlOrder,
                                        "product": item.urls,
                                        "weight": url
                                    },
                                    success: function (data) {
                                        const input = document.querySelectorAll('.modalBasketInput');
                                        input.forEach(item => {
                                           item.style.display = "none";
                                        })
                                        const goodOrder = document.querySelector('.goodOrder');
                                        goodOrder.style.display = "block";
                                        const orderButton = document.querySelector('.orderButton');
                                        orderButton.style.display = "none";
                                        const closeButton = document.querySelector('.closeButton');
                                        closeButton.style.display = "block";
                                        closeButton.addEventListener('click',()=>{
                                            const moduleWindow = document.querySelector('.modalBasket');
                                            moduleWindow.style.display = "none";
                                        })
                                        localStorage.setItem('basket','[]');
                                        let arrayElem = document.querySelectorAll('.app_position');
                                        arrayElem.forEach(item=>{
                                            item.remove();
                                        })
                                        totalPrice();
                                        checkNoneValue();
                                    },
                                    failure: function (data2) {
                                    },
                                });
                            }
                        },
                        failure: function (data2) {

                        },
                    });
                })
            },
            failure: function (data2) {
            },
        });
    })
}