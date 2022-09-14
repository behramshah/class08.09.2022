let standartCells = Array.from(document.querySelectorAll('td:not(.given-number)'));
let numberkeys = Array.from(document.getElementsByClassName('number-control'));


onSelect = function (event) {
    standartCells.forEach( cell => cell.removeAttribute("class"));
    event.target.classList.add('selected');
}

function getSelectedCell () {
    return document.getElementsByClassName('selected')[0];
}

function changeCandidateNumbers (selectedCell, event) {
    let candidateNumbers = selectedCell.children[0].innerHTML;
    
    
    if(candidateNumbers.includes(event.target.textContent)){
        let newCandidates = candidateNumbers.replaceAll(event.target.textContent, '')
        selectedCell.children[0].innerHTML = newCandidates;
    } else {
        getSelectedCell().children[0].innerHTML = candidateNumbers + event.target.textContent;
    }
}

function numberPressed (event) {
    selectedCell = getSelectedCell();
    let inputSwitch = document.getElementById('candidate-switch');
     
    if (selectedCell) {
        inputSwitch.checked ? 
        changeCandidateNumbers(selectedCell, event)
        : 
        selectedCell.children[1].innerHTML = event.target.textContent;
    }
}

standartCells.forEach( cell => cell.addEventListener('click', onSelect));

numberkeys.forEach(key => key.addEventListener('click', numberPressed))