import PropTypes from 'prop-types';
import './GameBoard.css';

const initialGameBoard = Array(3).fill().map(() => Array(3).fill());

export default function GameBoard({ onHandlePlayer, turns }) {

  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }


  function handleAddSymbol(rowIndex, colIndex) {
    onHandlePlayer(rowIndex, colIndex);
  };

  return (
    <div className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          <div>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleAddSymbol(rowIndex, colIndex)} disabled={playerSymbol != undefined}>{playerSymbol}</button>
              </li>
            ))}
          </div>
        </ol>
        )
      )}
    </div>
  );
}

GameBoard.propTypes = {
  onHandlePlayer: PropTypes.func.isRequired,
  turns: PropTypes.array
};