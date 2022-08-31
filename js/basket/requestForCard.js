import drawCard from "./drawCard.js";
import addFuncCard from "./addFuncCard.js";

export default function requestForCard() {
    let arrObj = [];
    JSON.parse(localStorage.getItem('basket')).forEach(item => {
        let obj={};
        if (item != null) {
            $.ajax({
                type: "GET",
                url: item.urls,
                data: '',
                success: function (data) {
                    obj.image = data.image;
                    obj.name = data.name;
                    obj.gram = item.gram;
                    obj.count = item.count;
                    obj.ed = item.ed;
                    obj.price = data.price;
                    obj.available = data.count;
                    //obj.isVisible = data.isVisible;
                    arrObj.push(obj);
                },
                failure: function (data2) {
                },
            });
        }
    })
    setTimeout(()=>{
        arrObj.forEach(item=>{
            drawCard(item.image, item.name, item.gram, item.ed, item.count, item.price, item.available);
        })
    },200)
}