import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import './App.css';

const initialGameBoard = Array(3).fill().map(() => Array(3).fill());

function checkWinner(board) {
  // Diagonals winning conditions
  if ((board[0][0] == board[1][1] && board[0][0] == board[2][2]) || 
    (board[0][2] == board[1][1] && board[0][2] == board[2][0])) {
      return board[1][1];
  }

  // Col or row winning conditions
  for (let i = 0; i < 3; i++) {
    if (board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
      return board[0][i];
    }
        
    if (board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
        return board[i][0];
    }
  }

  return undefined;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [win, setWin] = useState(undefined);

  function handlePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      // Check if winner
      const winner = checkWinner(gameBoard);
      if (winner != undefined) setWin(winner);

      // Check if draw
      if (updatedTurns.length > 8 && winner == undefined) {
        setWin('draw');
      }
      
      return updatedTurns;
    });
  }

  const gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return <main>
    <div id="game-container">
      
      <div id="players">
        <Player name ="Player 1" symbol="X" isActive={gameTurns.length > 0 ? gameTurns[0].player === "O" : true} />
        <Player name ="Player 2" symbol="0" isActive={gameTurns.length > 0 ? gameTurns[0].player === "X" : false} />
      </div>

      {win == 'draw' && <p>Game finished in draw!</p>}
      {win != undefined && <p>Game won by {win}!</p>}

      <GameBoard onHandlePlayer={handlePlayer} board={gameBoard} />

      <Log turns={gameTurns} /> 
    
    </div>

  </main>;
}

export default App
