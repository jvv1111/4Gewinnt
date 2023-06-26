const restartButton = document.getElementById('game-restart');
restartButton.addEventListener('click', function () {
    console.log("Thanky you, for clicking the retart button!");
    location.reload();
});

const gameboard = document.getElementById('gameboard');
gameboard.addEventListener('click', markField);

let currentPlayer = 'X';
const currentPlayerElement = document.getElementById('currentPlayer');
function markField(e) {
    var field = e.target;
    if (field.localName === 'div'){
        return;
    }
    field.setAttribute('aria-label', currentPlayer);
    field.setAttribute('disabled', 'disabled');
    if (playerHasWon()){
        console.log(`${currentPlayer} has won!`);
        currentPlayerElement.textContent = `${currentPlayer} has won!`;
        return;
    }
    
    if (currentPlayer === 'X'){
        currentPlayer = 'O';
        currentPlayerElement.textContent = "O's turn";
    } else {
        currentPlayer = 'X';
        currentPlayerElement.textContent = "X's turn";
    }
    
}

function playerHasWon(){
    // TO DO
    return false;
}

setTimeout(function(){
    setInterval(nervig , 100);
} , 3500);
