import './App.css';

import Player from './components/Player';

function App() {
  return <main>
    <div id="game-container">
      {/* PLAYERS */}
      <div id="players">
        <Player name ="Player 1" symbol="X" />
        <Player name ="Player 2" symbol="0" />
      </div>

      GAME BOARD

    </div>

  </main>;
}

export default App
