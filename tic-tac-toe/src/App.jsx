import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard'
import './App.css';

function App() {

  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayer(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      const currentPlayer = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      
      return updatedTurns
    });
  }

  return <main>
    <div id="game-container">
      
      <div id="players">
        <Player name ="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name ="Player 2" symbol="0" isActive={activePlayer === "O"} />
      </div>

      <GameBoard onHandlePlayer={handlePlayer} turns={gameTurns} />
    
    </div>

  </main>;
}

export default App
