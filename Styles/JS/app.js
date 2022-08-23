 const select= []; 

function displayPlayer(){


    const totalPlayers = document.getElementById('total-added');
    totalPlayers.innerText = select.length;
    
    const playerSelect = document.getElementById('player-select');
    playerSelect.textContent = '';

    for( let i = 0; i < select.length; i++){

        /* const td = document.createElement('td');
        td.innerHTML= `
        <th>${i+1}</th>
        <td>${select[i].playersName}</td>
        `;

        playerSelect.appendChild(td); */

        const ol = document.createElement("ol");
        ol.innerHTML = `
        <th>${i+1}</th>
        <ol>${select[i].playersName}</ol>
        `;
        playerSelect.appendChild(ol);
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