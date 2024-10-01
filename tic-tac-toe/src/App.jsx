import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import EndGame from './components/EndGame';
import ErrorBoundary from "./components/ErrorBoundary";

import './App.css';

import { InitialGameBoard, InitialPlayers } from './assets/constants';

function checkEndConditions(board, turnsLength) {
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

  // Draw condition
  if (turnsLength > 8) {
    return 'draw';
  }

  // No winner yet
  return undefined;
}

function obtainGameBoard(turns) {
  const gameBoard = [...InitialGameBoard.map(array => [...array])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
      
      return updatedTurns;
    });
  }

  function restartGame() {
    setGameTurns([]);
  }

  const gameBoard = obtainGameBoard(gameTurns);

  // Check if winner / draw
  const win = checkEndConditions(gameBoard, gameTurns.length);

  const [players, setPlayers] = useState(InitialPlayers);

  function updatePlayersHandler(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    });
  }

  return <main>
    <div id="game-container">
      <div id="players">
        <Player name ={players.X} symbol="X" changeNameHandler={updatePlayersHandler} 
          isActive={gameTurns && gameTurns.length > 0 ? gameTurns[0].player === "O" : true} block={win!=undefined ? true : false} />  
        <Player name ={players.O} symbol="O" changeNameHandler={updatePlayersHandler} 
          isActive={gameTurns && gameTurns.length > 0 ? gameTurns[0].player === "X" : false} block={win!=undefined ? true : false} />
      </div>

      {win != undefined && 
        <EndGame win={win} restartGame={restartGame} />}

      <ErrorBoundary>
        <GameBoard onHandlePlayer={handlePlayer} board={gameBoard} block={win!=undefined ? true : false} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Log turns={gameTurns} players={players} /> 
      </ErrorBoundary>
    
    </div>

  </main>;
}

export default App
