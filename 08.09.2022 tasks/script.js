let image = document.getElementById('image');
let password = document.getElementById('password');
let blurValue = 100;


function checkPassword (e) {
    let inputValue = e.target.value
    if(inputValue.length > 8){
        blurValue = blurValue*0.8;
    }
    image.style.filter = `blur(${blurValue}px)`
}

password.addEventListener('input', checkPassword);