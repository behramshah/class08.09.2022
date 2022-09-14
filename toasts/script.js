let messageToast = document.getElementById('message-content');
let duration = document.getElementById('duration').value; // aşağıda götür yoxsa 1 defe görür
let addToastButton = document.getElementById('add-button');
let cancelable = document.getElementById('cancelable').value;
let toastsContainer = document.getElementById('toasts');
let toasts = [];
const baseClass = 'toast'
const successClassname = 'success-toast';
const errorClassname = 'error-toast';


function createToasts () {
    let newdiv = document.createElement('div');
    let message = document.createElement('p');
    let cancelButton = document.createElement('button');
    newdiv.classList.add(baseClass);
    message.classList.add('message');
    message.appendChild(document.createTextNode(messageToast.value));
    cancelButton.classList.add('cancel-button');
    cancelButton.innerText = 'X';
    newdiv.appendChild(message);
    newdiv.appendChild(cancelButton);
    if(document.getElementById('success').checked){
        newdiv.classList.add(successClassname)
    } else {newdiv.classList.add(errorClassname)}
   if(duration){
    newdiv.setAttribute('duration', duration);
   } else {newdiv.setAttribute('duration', 500);}    
    return newdiv;
}


function addToast() {  
    toastsContainer.appendChild(createToasts()); 
    // toasts.push(createToasts)
    // renderToast();    
};

addToastButton.addEventListener("click", addToast);