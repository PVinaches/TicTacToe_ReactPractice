import './App.css';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  return <main>
    <div id="game-container">
      
      <div id="players">
        <Player name ="Player 1" symbol="X" />
        <Player name ="Player 2" symbol="0" />
      </div>

      <GameBoard />
    
    </div>

  </main>;
}

export default App
