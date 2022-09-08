let nums = ['0','1','2','3','4','5','6','7','8','9'];

const inputs = Array.from(document.getElementsByClassName('number_input'));

function changeDigit (e){
    let key = e.key;  
    if(nums.includes(key)){
        e.target.value = key;
    } else {e.target.innerHTML = ''}

    console.log(e.target.value)
    }



inputs.forEach(input => input.addEventListener('keypress', changeDigit))