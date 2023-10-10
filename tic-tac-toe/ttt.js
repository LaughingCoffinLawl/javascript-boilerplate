// Game Module
const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const makeMove = (index, player) => {
    if (board[index] === "") {
      board[index] = player;
      return true;
    }
    return false;
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, makeMove, reset };
})();

// UI Module
const gameUI = (() => {
  const cells = document.querySelectorAll(".cell");
  const message = document.getElementById("message");
  const startGameButton = document.getElementById("start-game");
  const playerXRadio = document.getElementById("x");
  const playerORadio = document.getElementById("o");
  const playerChoice = document.querySelector(".header");
  const board = document.getElementById("board");
  const winMessage = document.getElementById("win-message");

  const render = () => {
    const boardData = gameBoard.getBoard();
    cells.forEach((cell, index) => {
      cell.innerText = boardData[index];
    });
  };

  const setMessage = (text) => {
    message.innerText = text;
  };

  const setWinMessage = (text) => {
    winMessage.innerText = text;
  };

  const markWinningCells = (combo) => {
    combo.forEach((index) => {
      cells[index].classList.add("win");
    });
  };

  const resetUI = () => {
    cells.forEach((cell) => {
      cell.innerText = "";
      cell.classList.remove("win");
    });
    setMessage("");
  };

  startGameButton.addEventListener("click", () => {
    startGameButton.innerText = "Start Game";
    setWinMessage("");
    const selectedPlayer = playerXRadio.checked ? "X" : "O";
    if (selectedPlayer) {
      board.style.display = "grid"; // Display the game board
      gameBoard.reset();
      gameLogic.reset(selectedPlayer);
      render();
      setMessage(`Player ${selectedPlayer}'s Turn`);
    } else {
      alert("Please select a player (X or O).");
    }
  });

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      const currentPlayer = gameLogic.getCurrentPlayer();
      if (currentPlayer) {
        if (gameBoard.makeMove(index, currentPlayer)) {
          render();
          const result = gameLogic.checkWinner();
          if (result) {
            if (result === "draw") {
              setWinMessage("It's a draw!");
              startGameButton.textContent = "Reset";
            } else {
              setWinMessage(`Player ${result} wins!`);
              startGameButton.textContent = "Reset";
              markWinningCells(gameLogic.getWinningCombo());
            }
          } else {
            gameLogic.togglePlayer();
            setMessage(`Player ${gameLogic.getCurrentPlayer()}'s Turn`);
          }
        }
      }
    });
  });

  return { render, setMessage, markWinningCells, resetUI };
})();

// Game Logic Module
const gameLogic = (() => {
  let currentPlayer = "X";
  let winningCombo = null;
  let gameActive = true;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        gameBoard.getBoard()[a] &&
        gameBoard.getBoard()[a] === gameBoard.getBoard()[b] &&
        gameBoard.getBoard()[a] === gameBoard.getBoard()[c]
      ) {
        winningCombo = combo;
        return currentPlayer;
      }
    }

    if (!gameBoard.getBoard().includes("")) {
      return "draw";
    }
    return null;
  };

  const togglePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  };

  const getCurrentPlayer = () => currentPlayer;

  const getWinningCombo = () => winningCombo;

  const reset = (initialPlayer) => {
    currentPlayer = initialPlayer || "X";
    winningCombo = null;
  };

  return {
    checkWinner,
    togglePlayer,
    getCurrentPlayer,
    getWinningCombo,
    reset,
  };
})();
