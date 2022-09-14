const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const symbols = ['"','!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','^', '_'];

const upperCase = document.getElementById('uppercase');
const loverCase = document.getElementById('lovercase');
const numbersInclude = document.getElementById('numbers');
const symbolsInclude = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

function createPassword(){
    let minLength = parseInt(document.getElementById('pas-length').value);
    if( minLength < 5){
        return
    }
    let generated ='';
    do {
        if(upperCase.checked){
            generated = generated + alphabet[Math.random(0, alphabet.length-1)];
            minLength--
        }
        if(loverCase.checked){
            generated = generated + alphabet[Math.random(0, alphabet.length-1)];
            minLength--
        }
        if(numbersInclude.checked){
            generated = generated + numbers[Math.random(10)];
            minLength--
        }
        if(symbolsInclude.checked){
            generated = generated + symbols[Math.random(symbols.length-1)];
            minLength--;
        }      
    } while (minLength)
    
    console.log(generated)
}

generateBtn.addEventListener('click', createPassword)