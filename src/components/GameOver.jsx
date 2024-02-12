/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function GameOver({winner, restartFun}){

    return  <div id="game-over">
        <h2> game Over</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>Its a draw!</p>}

        
    <button onClick={restartFun}>Rematch</button>
    </div>
}
