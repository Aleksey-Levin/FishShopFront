import createModuleWindow from "./createModuleWindow.js";

export function addCard(name, imgLink, className, linkItem, isVisible) {
    if(isVisible){
        const content = document.querySelector('.card-columns');
        const card = document.createElement('div');
        card.className = "card " + className;
        content.appendChild(card);

        const blockImg = document.createElement('div');
        blockImg.className = "imgBlock";
        card.appendChild(blockImg);

        const img = document.createElement('img');
        img.className = "card-img-top";
        img.src = imgLink;
        img.alt = "Card image cap";
        blockImg.appendChild(img);

        const span = document.createElement('span');
        span.className = "adding"
        blockImg.appendChild(span);

        const imgSpan = document.createElement('img');
        imgSpan.src = "/static/img/addbtn.png"
        span.appendChild(imgSpan);

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        const cardBody2 = document.querySelector('.card-body');
        card.addEventListener('click', () => {
            $.ajax({
                type: "GET",
                url: linkItem,
                data: '',
                success: function (data) {
                    const modalBodyY = document.querySelector('.modal-body');
                    let arrWeight = [];
                        data["products_weights"].forEach(item=>{
                            $.ajax({
                                type: "GET",
                                url: item,
                                data2: '',
                                success: function (data2) {
                                    arrWeight.push(data2.weight);
                                },
                                failure: function (data2) {
                                },
                            });
                        })
                    setTimeout(()=>{createModuleWindow(data.url, data.name, data.price, arrWeight, data.count, data.image, data.description, className, data.price)},200);
                    var cardTitle = $(this).parent().find(".card-title").text();
                    var images = $(this).attr("src");
                    $(".card-img-top-mdl").attr("src", images);
                    $(".card-name").text(cardTitle);
                    $('#exampleModal').modal('show');
                    if (data["is_visible"] && data["is_deleted"]) {
                        card.style.display = "none";
                    }
                },
                failure: function (data) {
                },
            });
        })

        const nameCard = document.createElement('h5');
        nameCard.className = "card-title";
        nameCard.innerText = name;
        cardBody.appendChild(nameCard);

    }
}