import { winnerCombos } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  //Checkeamos las Combinaciones Ganadoras

  for (const combo of winnerCombos) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // if does not exist a winner
  return null;
};

export const checkEndGame = (newBoard) => {
  //Verificamos si hay empate y si no hay mas espacios vacios en el tablero
  return newBoard.every((Square) => Square !== null);
};