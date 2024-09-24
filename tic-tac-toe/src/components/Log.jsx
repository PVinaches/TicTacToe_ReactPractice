import PropTypes from 'prop-types';
import './Log.css';

export default function Log({ turns, players }) {
  if (turns && turns.length > 0) {    
    return (
      <>
        <p className='logs-title'>Movements list:</p>
        <table className="logs">
          <thead>
            <tr>
              <th>Player</th>
              <th>Move</th>
            </tr>
          </thead>
          <tbody>
            {turns.map((turn, i) => (
              <tr key={i}>
                <td>{players[turn.player]}</td>
                <td>{turn.square.row} : {turn.square.col}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

Log.propTypes = {
  turns: PropTypes.any,
  players: PropTypes.object
};