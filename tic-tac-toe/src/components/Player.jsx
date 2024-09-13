import { useState } from 'react';
import './Player.css';
import PropTypes from 'prop-types';

export default function Player({ name, symbol }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function editClickHandler() {
    setIsEditing((editing) => !editing);
  }

  function changeNameHandler(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) editablePlayerName = <input type='text' required value={playerName} onChange={changeNameHandler} />;


  return (
    <div className="player-box">
      <div className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </div>
      <button className="edit" onClick={editClickHandler}>{isEditing ? "SAVE" : "EDIT"}</button>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};

