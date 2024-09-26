import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './EndGame.css';

export default function EndGame({ win, restartGame }) {
  return createPortal(
    <div className='end-game'>
      {win == 'draw' && <p>Game finished in draw!</p>}
      {win != 'draw' && <p>Game won by {win}!</p>}

      <button onClick={() => restartGame()}>Start again!</button>
    </div>,
    document.getElementById('modal')
  );
}

EndGame.propTypes = {
  win: PropTypes.any,
  restartGame: PropTypes.func
};