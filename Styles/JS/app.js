 const select= []; 

function displayPlayer(){


    const playerSelect = document.getElementById('player-select');
    playerSelect.textContent = '';

    for( let i = 0; i < select.length; i++){

        if( i < 5){
            const ol = document.createElement("ol");
            ol.innerHTML = `
            
            <ol>${i+1} : ${select[i].playersName}</ol>
            `;
            playerSelect.appendChild(ol);
        }else{
            alert ('Maximum 5 Players Allowed');
        }
    }

    
}  

function addPlayer(element){
     const playersName = element.parentNode.parentNode.children[0].innerText;

    const player = {
        playersName : playersName,
    }

    select.push(player)

    displayPlayer(); 
}

function getInputFieldElementById(inputId){
    const playerInputField = document.getElementById(inputId);
    const playerInputString = playerInputField.value;
    const playerInput = parseInt(playerInputString);

    if(isNaN(inputId)){
        alert ('Please provide the valid Number');
        playerInputField = ' ';
    }
    else{

        return playerInput; 
    }

    
}
    

    

function getTextElementById(textId){
    const textElement = document.getElementById(textId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseInt(textElementValueString);
    return textElementValue; 
}

function setTextElementValueById(textId , newValue){
    const textElement = document.getElementById(textId);
    textElement.innerText = newValue;

}
/* Calculation */

document.getElementById('btn-calculate').addEventListener('click', function(){
    
    const perPlayerCost = getInputFieldElementById('per-player-field')
     
    const playerExpenses = perPlayerCost * 5;
    console.log(playerExpenses);

    const previousCost = getTextElementById('expense-field');
    const expense = previousCost + playerExpenses;
    setTextElementValueById('expense-field', expense)

})

document.getElementById('total-calculate').addEventListener('click', function(){
    
    const managerCost = getInputFieldElementById('manager-input-field');
    const coachCost = getInputFieldElementById('coach-input-field');

    const playerExpenses = getTextElementById('expense-field');
    const perPlayerExpenses = managerCost + coachCost + playerExpenses;
    
    //Total expense field
    const totalPreviousExpense = getTextElementById('total-expense-field');
    const totalCost = totalPreviousExpense + perPlayerExpenses;

    setTextElementValueById('total-expense-field', totalCost);

    
})