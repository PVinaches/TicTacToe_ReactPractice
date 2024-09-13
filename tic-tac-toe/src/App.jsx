import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard'
import './App.css';

function App() {

  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayer() {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
  }

  return <main>
    <div id="game-container">
      
      <div id="players">
        <Player name ="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name ="Player 2" symbol="0" isActive={activePlayer === "O"} />
      </div>

      <GameBoard onHandlePlayer={handlePlayer} currentPlayer={activePlayer} />
    
    </div>

  </main>;
}

export default App
