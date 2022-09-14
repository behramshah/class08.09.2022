const radioButtons = Array.from(document.getElementsByClassName('radio_level'));
const canvas = document.getElementById('playground');
const leftright = canvas.clientWidth*0.93;
const topbottom = canvas.clientHeight*0.93;
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
var scoreNumber = document.getElementById('score_number');
var namePlayer = document.getElementById('name');
var statusGame = document.getElementById('game_status');
var game = false;
var intervalID;
var interval = 1000;
let bubbles=[];

localStorage.setItem('Record', 'record 3');

namePlayer.innerHTML = prompt('Your name');

function setGameLevel (e){
    if(game){
        stopGame();
        radioButtons.forEach(radio => radio.parentElement.classList ='');
        e.target.classList.toggle('active');
        level = document.getElementsByClassName('active')[0].innerText; 
        if (level.length === 4){
            interval=100;
        } else if (level.length === 7) {
            interval=500;
        } else {interval=1000;}
        startGame()
    } else {
        radioButtons.forEach(radio => radio.parentElement.classList ='');
        e.target.classList.toggle('active');
        level = document.getElementsByClassName('active')[0].innerText; 
        if (level.length === 4){
            interval=100;
        } else if (level.length === 7) {
            interval=500;
        } else {interval=1000;}
    }
}

function createBubble () {
    const bubble = document.createElement('div');
    bubble.classList ='bubble';
    bubble.style.top = Math.floor(Math.random()*topbottom) + 'px';
    bubble.style.bottom = Math.floor(Math.random()*topbottom) + 'px';
    bubble.style.left = Math.floor(Math.random()*leftright) + 'px';
    bubble.style.right = Math.floor(Math.random()*leftright) + 'px';
    bubble.addEventListener('click', shootBuble)
    bubbles.push(bubble);
    canvas.appendChild(bubble);
    checkGameOver();
}

function checkGameOver (){
    if((bubbles.length - scoreNumber.innerHTML) > 49) {
        stopGame();
        statusGame.innerHTML = 'game over';
        let record = parseInt(localStorage.getItem('Record').split(' ')[1])
        if(scoreNumber.innerHTML > record){
            localStorage.setItem('Record', `${namePlayer.innerHTML} ${scoreNumber.innerHTML}`);
        }
    }
}

function startGame () { 
    bubbles.forEach(bubble => bubble.addEventListener('click', shootBuble));
    game = true;
    intervalID = setInterval(createBubble, interval);   
    statusGame.innerHTML = '';
}

function stopGame () {
    game = false;
    clearInterval(intervalID);
    bubbles.forEach(bubble => bubble.removeEventListener('click', shootBuble));
    statusGame.innerHTML = 'game paused';
}

function shootBuble (event) {
    event.target.remove();
    scoreNumber.innerHTML++;
    bubbles.shift();
}

radioButtons.forEach(radio => radio.parentElement.addEventListener('click', setGameLevel));
startButton.addEventListener( 'click', startGame);
stopButton.addEventListener('click', stopGame);