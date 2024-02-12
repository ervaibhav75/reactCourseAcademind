import Player from "./components/PlayerInfo"
import React, { useState } from "react"
import GameBoard from "./components/GameBoard";
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

const PLAYERS = {
  'X': 'Player1',
  'O': 'Player2'
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map((array)=>[...array])]
  for (const turn of  gameTurns){

  const {square, player} = turn
  const {row, col} = square
  gameBoard[row][col] = player
  
  }
  return gameBoard
}

function deriveWinner(gameBoard, playerNames){
  let winner = null
  for (const combination of WINNING_COMBINATIONS){
    const symbol1 = gameBoard[combination[0].row] [combination[0].column]
    const symbol2 = gameBoard[combination[1].row] [combination[1].column]
    const symbol3 = gameBoard[combination[2].row] [combination[2].column]

  


    if (symbol1 && (symbol1 === symbol2 && symbol2 === symbol3)){
        winner = playerNames[symbol1]

  }}
  return winner
}

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player == 'X'){
    currentPlayer =  'O'
  }
  return currentPlayer
}

function App() {
  
  //const[activePlayer, setActivePlayer] = useState('X');
  const[gameTurns, setGameTurns] = useState([])
  
  const[playerNames, setPlayerNames] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns)


  const gameBoard = deriveGameBoard(gameTurns)

  const winner =  deriveWinner(gameBoard, playerNames)

   
  const hasDraw = gameTurns.length === 9 && !winner 

  function changePlayerName(symbol, playerName){
    setPlayerNames(object=>
     {
      return{
      ...object,
      [symbol] : playerName

    }});

  }
  function changePlayer(rowIndex, colIndex){
    
    setGameTurns(previousTurn => {
      
      const currentPlayer = deriveActivePlayer(previousTurn)
      const updatedTurn = [{"square":{ "row": rowIndex, "col": colIndex},
      "player": currentPlayer} ,...previousTurn];

      return updatedTurn
    })
  }

  function startRematch(){
    console.log("restart")
    setGameTurns([])
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players"  className="highlight-player" >
          
          <Player onChangeName = {changePlayerName} 
            name={PLAYERS.X} symbol="X" 
            isActive={activePlayer === 'X' ? true : false}  />

          <Player onChangeName = {changePlayerName} 
            name={PLAYERS.O} symbol="O" 
            isActive={activePlayer === 'O' ? true : false } />
          
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} restartFun={startRematch}></GameOver>}
          <GameBoard  onSelectSquare={changePlayer} board ={gameBoard}/>
        </div>
          <Log turns={gameTurns}> </Log>
      </main>
  
    );
  }

export default App;
