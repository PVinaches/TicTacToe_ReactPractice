import PropTypes from 'prop-types';
import { useState } from 'react';
import './Player.css';

export default function Player({ name, symbol, changeNameHandler, isActive, block }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function editClickHandler() {
    setIsEditing((editing) => !editing);
    changeNameHandler(symbol, playerName);
  }

  function nameHandler(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) editablePlayerName = <input type='text' required value={playerName} onChange={nameHandler} />;


  return (
    <div className={isActive ? "player-box active" : "player-box"} >
      <div className="player" >
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </div>
      <button className="edit" onClick={editClickHandler} disabled={block}>{isEditing ? "SAVE" : "EDIT"}</button>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  changeNameHandler: PropTypes.func.isRequired,
  isActive: PropTypes.any,
  block: PropTypes.bool.isRequired
};

