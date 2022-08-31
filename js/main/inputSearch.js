export function inputSearch(){
    const inputSearch = document.querySelector('.searching');
    inputSearch.addEventListener('keyup', () => {
        const allCards = document.querySelectorAll('.card');
        let value2 = inputSearch.value.toLowerCase();
        allCards.forEach(item => {
            if (item.querySelector('.card-title').textContent.toLowerCase().indexOf(value2) == -1) {
                item.style.display = "none";
            } else {
                item.style.display = "inline-block";
            }
        })
    })
}
