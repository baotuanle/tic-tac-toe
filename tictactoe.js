const board = {
    cells: ["","","","","","","","",""]
}
let gameOver = false;
let winner = "";
const grid = document.querySelectorAll(".grid");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".restart");

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player1 = new Player("Player X", "X");
const player2 = new Player("Player O", "O");

let currentMarker = player1.marker;

function resetGame() {
    resetButton.style.visibility = 'visible';
    resetButton.addEventListener('click', () => {
      window.location.reload();
    });
  }

function displayGrid(board) {
    grid.forEach((gridItem) => {
        const index = parseInt(gridItem.dataset.index, 10);
        gridItem.textContent = board.cells[index];
    })
}


function addMarker(event) {
    const gridItem = event.target;
    const index = parseInt(gridItem.dataset.index, 10);
  
    if (board.cells[index] !== "") {
      return;
    } else {
      gridItem.textContent = currentMarker;
      board.cells[index] = currentMarker;
      displayGrid(board);
      if (checkWinner(currentMarker)) {
        return;
      }
      currentMarker = currentMarker === player1.marker ? player2.marker : player1.marker;
      if (currentMarker === player1.marker) {
        currentName = player1.name;
      }
      else {
        currentName = player2.name;
      }
      message.textContent = `${currentName}'s Move`;
    }
  }

function removeAbilityToClick() {
    grid.forEach((gridItem) => {
        gridItem.removeEventListener("click", addMarker);
    });
    return;
}

function checkWinner(marker) {
    //horizontals
    if (board.cells[0] === marker && board.cells[1] === marker && board.cells[2] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
        
    }
    else if (board.cells[3] === marker && board.cells[4] === marker && board.cells[5] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    else if (board.cells[6] === marker && board.cells[7] === marker && board.cells[8] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    //diagonals
    else if (board.cells[0] === marker && board.cells[4] === marker && board.cells[8] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    else if (board.cells[2] === marker && board.cells[4] === marker && board.cells[6] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    //verticals
    else if (board.cells[0] === marker && board.cells[3] === marker && board.cells[6] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    else if (board.cells[1] === marker && board.cells[4] === marker && board.cells[7] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    else if (board.cells[2] === marker && board.cells[5] === marker && board.cells[8] === marker) {
        gameOver = true;
        if (marker === player1.marker) {
            winner = player1.name;
        }
        else {
            winner = player2.name;
        }
    }
    if (gameOver) {
        message.textContent = `${winner} has won the game!`;
        removeAbilityToClick();
        resetGame();
        return true;
    }
    else if (board.cells[0] !== "" && board.cells[1] !== "" && board.cells[2] !== "" 
    && board.cells[3] !== "" && board.cells[4] !== "" && board.cells[5] !== "" && 
    board.cells[6] !== "" && board.cells[7] !== "" && board.cells[8] !== "" && gameOver != true){
        message.textContent = `It is a tie game!`;
        removeAbilityToClick();
        resetGame();
        return true;
    }
    
}


displayGrid(board);


grid.forEach((gridItem) => {
    gridItem.addEventListener("click", addMarker);
  });






