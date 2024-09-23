import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import './App.css';

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      
      return updatedTurns
    });
  }

  return <main>
    <div id="game-container">
      
      <div id="players">
        <Player name ="Player 1" symbol="X" isActive={gameTurns.length > 0 ? gameTurns[0].player === "O" : true} />
        <Player name ="Player 2" symbol="0" isActive={gameTurns.length > 0 ? gameTurns[0].player === "X" : false} />
      </div>

      <GameBoard onHandlePlayer={handlePlayer} turns={gameTurns} />

      <Log turns={gameTurns} /> 
    
    </div>

  </main>;
}

export default App
