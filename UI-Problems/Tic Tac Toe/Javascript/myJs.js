(function () {
let boxes = document.getElementsByClassName('box');
let resultDisplay = document.getElementById('result');
let isPlayer1turn = true;
let totalTurns = 0;
let matrix =[
  ['-', '-', '-'], 
  ['-', '-', '-'] ,
  ['-', '-', '-']
]; 
  // event listener i / 3
for(let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleClick.bind(this,i, boxes[i]));
}

function findWinner() {
  // 1. check horizonal 2. varticle 3. axis
  var winningRow;
  // if(row[0] === row[1] && row[1] === row[2] && row[0] !== "-" ) { // all same
  for(let r = 0; r < matrix.length; r++) {
     if (matrix[r][0] === matrix[r][1] && 
         matrix[r][1] === matrix[r][2] &&
         matrix[r][0] !== "-")
         { return matrix[r][0] };
  }

  for(let c = 0; c < matrix[0].length; c++) {
    if (matrix[0][c] === matrix[1][c] && 
        matrix[1][c] === matrix[2][c] &&
        matrix[0][c] !== "-") { 
          return matrix[0][c];
        };
 }
  
 if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== "-") { 
        return matrix[0][0];
  };

if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== "-") { 
    return matrix[0][0];
};

 return "-";
}

function reset() {
  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < matrix[0].length; c++) {
      matrix[r][c] = "-";
    }
 }
 for(let i = 0; i < boxes.length; i++) {
   boxes[i].innerText = ""; // clearing
   boxes[i].disabled = false;
 }
 isPlayer1turn = true;
 totalTurns = 0;
}

function handleClick(i, box) {
  totalTurns++;
  box.innerText = isPlayer1turn ? 'X' : '0';
  box.style.pointerEvents = "none";
  let row = Math.floor(i / 3); // as 3 * 3 matrix
  let col = Math.floor( i % 3); // as 3 * 3 matrix
  matrix[row][col] = isPlayer1turn ? 'X' : '0';
  isPlayer1turn = !isPlayer1turn;
  // if any player completed 3 turns then check for the winner
  if (totalTurns >= 5) {
    const res = findWinner();
    if ("X" === res) {
      resultDisplay.innerText = "Player 1 winner";
      return reset();
    } else {
      if ("0" === res) {
        resultDisplay.innerText = "Player 2 winner";
        return reset();
      }
    }
    if (totalTurns === 9) {
      resultDisplay.innerText = "Player 2 winner";
      return reset();
    }
 }
}
  
})();