import PropTypes from 'prop-types';
import './GameBoard.css';

export default function GameBoard({ onHandlePlayer, board, block }) {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <ol key={rowIndex}>
          <div>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onHandlePlayer(rowIndex, colIndex)} disabled={playerSymbol != undefined || block}>{playerSymbol}</button>
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
  board: PropTypes.array.isRequired,
  block: PropTypes.bool.isRequired
};