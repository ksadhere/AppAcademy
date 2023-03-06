const Screen = require('./screen');
const Cursor = require('./cursor');

class ConnectFour {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    Screen.addCommand('w', 'move up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('s', 'move down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('a', 'move left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'move right', this.cursor.right);

    Screen.addCommand('p', 'place a move', this.placeMove.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  placeMove() {
    if (this.grid[this.cursor.row][this.cursor.col] !== ' ') {
      console.log('This position has been placed');
    } else {
      if (this.playerTurn === 'O') {
        this.grid[this.cursor.row][this.cursor.col] = 'O';
        Screen.setGrid(this.cursor.row, this.cursor.col, 'O');
        Screen.render();
        this.playerTurn = 'X';
      } else {
        this.grid[this.cursor.row][this.cursor.col] = 'X';
        Screen.setGrid(this.cursor.row, this.cursor.col, 'X');
        Screen.render();
        this.playerTurn = 'O';
      }
      if (ConnectFour.checkWin(this.grid)) {
        ConnectFour.endGame(ConnectFour.checkWin(this.grid));
      }
    }
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  static checkWin(grid) {
    if (this.checkHorizontal(grid, 'X')) {
      return 'X';
    }
    if (this.checkVertical(grid, 'X')) {
      return 'X';
    }
    if (this.checkDia(grid, 'X')) {
      return 'X';
    }
    if (this.checkAntiDia(grid, 'X')) {
      return 'X';
    }

    if (this.checkHorizontal(grid, 'O')) {
      return 'O';
    }
    if (this.checkVertical(grid, 'O')) {
      return 'O';
    }
    if (this.checkDia(grid, 'O')) {
      return 'O';
    }
    if (this.checkAntiDia(grid, 'O')) {
      return 'O';
    }

    if (this.tie(grid)) {
      return 'T';
    }

    return false;

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
  }
  // check horizontal direction if four connected element equal to symbol
  static checkHorizontal(grid, symbol) {
    for (let r = 0; r < grid.length; r += 1) {
      let connected = 0;
      for (let c = 0; c < grid[0].length; c += 1) {
        if (grid[r][c] === symbol) {
          connected += 1;
          if (connected === 4) {
            return true;
          }
        } else {
          connected = 0;
        }
      }
    }
    return false;
  }

  // check vertical direction if four connected element equal to symbol
  static checkVertical(grid, symbol) {
    for (let c = 0; c < grid[0].length; c += 1) {
      let connected = 0;
      for (let r = 0; r < grid.length; r += 1) {
        if (grid[r][c] === symbol) {
          connected += 1;
          if (connected === 4) {
            return true;
          }
        } else {
          connected = 0;
        }
      }
    }
    return false;
  }

  // check diagonal direction if four connected element equal to symbol
  static checkDia(grid, symbol) {
    for (let r = 0; r < grid.length - 3; r += 1) {
      for (let c = 0; c < grid[0].length - 3; c += 1) {
        if (
          grid[r][c] === symbol &&
          grid[r + 1][c + 1] === symbol &&
          grid[r + 2][c + 2] === symbol &&
          grid[r + 3][c + 3] === symbol
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // check anti-diagonal direction if four connnected element equal to symbol
  static checkAntiDia(grid, symbol) {
    for (let r = 0; r < grid.length - 3; r += 1) {
      for (let c = grid[0].length - 1; c >= 3; c -= 1) {
        if (
          grid[r][c] === symbol &&
          grid[r + 1][c - 1] === symbol &&
          grid[r + 2][c - 2] === symbol &&
          grid[r + 3][c - 3] === symbol
        ) {
          return true;
        }
      }
    }
    return false;
  }

  // check if tie
  static tie(grid) {
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
        if (grid[r][c] === ' ') {
          return false;
        }
      }
    }
    return true;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = ConnectFour;
