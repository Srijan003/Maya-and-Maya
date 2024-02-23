$w.onReady(function () {
  // Define the game board and initial state
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameOver = false;

  // Function to handle a player's move
  function handleMove(index) {
    if (board[index] === "" && !gameOver) {
      board[index] = currentPlayer;
      $w(`#cell${index}`).text = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  // Function to check for a winner
  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        $w("#status").text = `${currentPlayer} wins!`;
        gameOver = true;
        return;
      }
    }

    if (board.every((cell) => cell !== "")) {
      $w("#status").text = "It's a tie!";
      gameOver = true;
    }
  }

  // Event handlers for each cell
  for (let i = 0; i < 9; i++) {
    $w(`#cell${i}`).onClick(() => handleMove(i));
  }

  // Reset button click handler
  $w("#resetButton").onClick(() => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    for (let i = 0; i < 9; i++) {
      $w(`#cell${i}`).text = "";
    }

    $w("#status").text = "Player X's turn";
  });
});
