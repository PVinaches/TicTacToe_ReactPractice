import PropTypes from 'prop-types';
import './EndGame.css';

export default function EndGame({ win, restartGame }) {
  return (
    <div className='end-game'>
      {win == 'draw' && <p>Game finished in draw!</p>}
      {win != 'draw' && <p>Game won by {win}!</p>}

      <button onClick={() => restartGame()}>Start again!</button>
    </div>
  );
}

EndGame.propTypes = {
  win: PropTypes.any,
  restartGame: PropTypes.func
};