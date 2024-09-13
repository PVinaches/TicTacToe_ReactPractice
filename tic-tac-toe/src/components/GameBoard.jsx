import PropTypes from 'prop-types';
import { useState } from "react";
import './GameBoard.css';

const initialGameBoard = Array(3).fill().map(() => Array(3).fill());

export default function GameBoard({ onHandlePlayer, currentPlayer }) {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleAddSymbol(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const newBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      newBoard[rowIndex][colIndex] = currentPlayer;
      return newBoard;
    });

    onHandlePlayer();
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

GameBoard.propTypes = {
  onHandlePlayer: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired
};