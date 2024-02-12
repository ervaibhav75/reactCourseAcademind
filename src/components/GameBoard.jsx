/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */




export  default function GameBoard({onSelectSquare, board}){
  

    
    // function handleSelectedSquare(rowIndex, colIndex){
    //     console.log("smthing")
      
        
    //     setgameBoard((previousBoard) => {
    //         const updatedBoard = [...previousBoard.map((innerArray) => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = currActivePlayer
    //         return updatedBoard
    //     })
    //     onSelectSquare()
       
    // }
    
    return (
        <ol id="game-board">
            {board.map((row, rowIndex ) => 
            <li key={rowIndex}> 
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}> 
                    
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                        disabled={!(playerSymbol == null)}>    
                        {playerSymbol}
                        </button>
                    
                    </li>)}
                </ol>
            
            </li>)}
            
        </ol>
    )
}
