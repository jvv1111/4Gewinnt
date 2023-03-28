const restartButton = document.getElementById('game-restart');
restartButton.addEventListener('click', function () {
    console.log("Thanky you, for clicking the retart button!");
    location.reload();
});

const gameboard = document.getElementById('gameboard');
gameboard.addEventListener('click', markField);

let currentPlayer = 'x';
const currentPlayerElement = document.getElementById('currentPlayer');
function markField(e) {
    var field = e.target;
    if (field.localName === 'div'){
        return;
    }
    field.setAttribute('aria-label', currentPlayer);
    if (currentPlayer === 'x'){
        currentPlayer = 'o';
        currentPlayerElement.textContent = "O's turn";
    } else {
        currentPlayer = 'x';
        currentPlayerElement.textContent = "X's turn";
    }

    field.setAttribute('disabled', 'disabled');
}

let xoxo = document.getElementById('xoxo');
xoxo.addEventListener('click', function () {
    if (xoxo.textContent === '📲') {
        xoxo.textContent = '💩';
        xoxo.direction = 'left';
    } else if (xoxo.textContent === '💩'){
        xoxo.direction = 'up';
        xoxo.textContent = '👽';
    } else if (xoxo.textContent === '👽'){
        xoxo.textContent = '👻';
        xoxo.direction = 'right';
    } else if (xoxo.textContent === '👻'){
        xoxo.textContent = '💟';
        xoxo.direction = 'left';
    } else if (xoxo.textContent === '💟'){
        xoxo.textContent = '💌';
        xoxo.direction = 'right';
    } else {
        xoxo.textContent = '📲' ;
        xoxo.direction = 'down';
    }
});

