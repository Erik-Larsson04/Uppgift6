let board;
let min = 1;
let int = 10;
let max = 2;
let currentPlayer = 'X';
let number = document.getElementById("number");
let winnerText = document.getElementById("winner");

function init() {
    calculateSum();
    squareNumber();
    checkPalindrome();
    createBoard();
    document.addEventListener("click", () => {
        checkWin();
        checkTie();
    });

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", reset);
}

window.onload = init;

function createBoard() {
    board = Array.from({ length: 3 }, () => Array(3).fill(null));

    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => handleClick(i, j));
            boardElement.appendChild(cell);
        }
    }
}

function handleClick(i, j) {
    if (!board[i][j] && !checkWin() && !checkTie()) {
        board[i][j] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    updateBoard();
}

function updateBoard() {
    const boardElement = document.getElementById('board');
    const cells = Array.from(boardElement.children);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i * 3 + j].textContent = board[i][j] ? board[i][j] : '';
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            winnerText.textContent = "Winner is " + board[i][0];
            return board[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            winnerText.textContent = "Winner is " + board[0][j];
            return board[0][j];
        }
    }

    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        winnerText.textContent = "Winner is " + board[0][0];
        return board[0][0];
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        winnerText.textContent = "Winner is " + board[0][2];
        return board[0][2];
    }

    return false;
}

function reset() {
    location.reload();
}

function checkTie() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!board[i][j]) {
                return false;
            }
        }
    }
    winnerText.textContent = "No winner!";
    return true;
}

function calculateSum() {
    let sum = (max - min + 1) * (min + max) / 2;
    number.textContent = sum;
}

function squareNumber() {
    let square = int * int;
    document.getElementById("square").textContent = square;
}

function checkPalindrome() {
    let str = "racecar";
    let palindromeText = document.getElementById("palindrome");
    if (str === str.split("").reverse().join('')) {
        palindromeText.textContent = "This is a palindrome: " + str.split("").reverse().join('');
    } else {
        palindromeText.textContent = "This is not a palindrome: " + str.split("").reverse().join('');
    }
}
