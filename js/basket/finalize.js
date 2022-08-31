import test from "./test.js";

export default function finalize() {
    if (document.querySelectorAll('.app_position').length == 0) {
        return undefined;
    }
    let objOrder = {};
    let url = "";
    let objRequest = {};
    //if (localStorage.getItem('user') == undefined || localStorage.getItem('user') == "outValue") {
    document.getElementById('id01').style.display = 'block';

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

    const errorTextElem = document.querySelector('.errorTextInp');
    const goodTextElem = document.querySelector('.goodTextInp');
    const city = document.getElementById('cityInput');
    const eMail = document.getElementById('eMailInput');
    const name = document.getElementById('nameInput');
    const homeNumber = document.getElementById('homeInput');
    const street = document.getElementById('streetInput');
    const flatNumber = document.getElementById('flatInput');
    const input = document.querySelectorAll('.modalBasketInput');
    const inputPhone = document.getElementById('numberInput');
    input.forEach(item => {
        if (item.id != "numberInput" && item.id != "eMailInput" && item.id != "nameInput") {
            item.style.display = "none";
        }
    })
    const buttonIn = document.querySelector('.continueButton');
    const buttonOrder = document.querySelector('.orderButton');
    buttonIn.style.display = "block"
    const regularPhone = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/;
    const regularEMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let flag = true;
    let customUrl;
    buttonIn.addEventListener('click', (e) => {
        if (regularPhone.test(inputPhone.value)) {
            errorTextElem.textContent = "";
            e.stopPropagation();
            let tempPhone = numFromStr(inputPhone.value);
            let tempPhoneUpd = `${8}(${tempPhone[1]}${tempPhone[2]}${tempPhone[3]})${tempPhone[4]}${tempPhone[5]}${tempPhone[6]}-${tempPhone[7]}${tempPhone[8]}-${tempPhone[9]}${tempPhone[10]}`;
            objRequest.phone = tempPhoneUpd;
            objRequest.eMail = eMail.value;
            objRequest.name = name.value;
            input.forEach(item => {
                if (item.id == "numberInput" || item.id == "eMailInput" || item.id == "nameInput") {
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            })
            buttonIn.style.display = "none";
            buttonOrder.style.display = "block";
        } else {
            errorTextElem.textContent = "Введите корректный телефон";
        }
    })
    buttonOrder.addEventListener('click', (e) => {
        if (homeNumber.value != "" && flatNumber.value != "") {
            errorTextElem.textContent = "";
            objRequest.home = homeNumber.value;
            objRequest.flat = flatNumber.value;
            objRequest.street = street.value;
            if (flag) {
                $.ajax({
                    type: "POST",
                    url: `${url}/accounts/customer/`,
                    data: {
                        "csrfmiddlewaretoken": window.CSRF_TOKEN,
                        "phone_number": objRequest.phone,
                        "email": objRequest.eMail,
                        "name": objRequest.name,
                        "addresses": [],
                    },
                    success: function (data) {
                        objOrder.customer = data;
                        $.ajax({
                            type: "POST",
                            url: `${url}/accounts/address/`,
                            data: {
                                "csrfmiddlewaretoken": window.CSRF_TOKEN,
                                "apartment": objRequest.flat.toString(),
                                "home": objRequest.home.toString(),
                                "street": objRequest.street.toString(),
                                "city": "",
                                "region": "",
                                "customer": data
                            },
                            success: function (data) {
                                objOrder.address = data;
                                $.ajax({
                                    type: "POST",
                                    url: `${url}/orders/order/`,
                                    data: {
                                        "csrfmiddlewaretoken": window.CSRF_TOKEN,
                                        "customer": objOrder.customer,
                                        "customer_address": objOrder.address,
                                        "goods": [],
                                    },
                                    success: function (data) {
                                        test(data)
                                    },
                                    failure: function (data2) {
                                    },
                                });
                            },
                            failure: function (data2) {
                            },
                        });
                    },
                    failure: function (data) {
                    },
                });
            }
        } else {
            errorTextElem.textContent = "Заполните все поля";
        }
    })
    // }
}