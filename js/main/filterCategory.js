export default function filterCategory(category) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(item => {
        if (category == 'all') {
            item.style.display = "inline-block";
        } else {
            if (item.className.split(' ').indexOf(category) == -1) {
                item.style.display = "none";
            } else {
                item.style.display = "inline-block"
            }
        }
    })
}