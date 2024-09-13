import { useState } from "react";

import './GameBoard.css';

const initialGameBoard = Array(3).fill().map(() => Array(3).fill());

export default function GameBoard() {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleAddSymbol(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newBoard = [...prevGameBoard];
      newBoard[rowIndex][colIndex] = 'X';
      return newBoard;
    });
  };

  return (
    <ol className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleAddSymbol(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
        )
      )}
    </ol>
  );
}