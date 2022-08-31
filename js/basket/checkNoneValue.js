export default function checkNoneValue() {
    if (document.querySelectorAll('.app_position').length == 0) {
    }
    let flag = true;
    document.querySelectorAll('.app_position').forEach(item => {
        if (item.style.display != "none") {
            flag = false;
        }
    })
    if(flag){
        document.querySelector('.basket_empty').style.display = 'inline-block';
    }

}