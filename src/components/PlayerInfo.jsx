/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"

export default function  Player({name, symbol, isActive, onChangeName}){
  
  const [isEditing, setIsEditing]  = useState(false)
  const [playerName, setPlayerName]  = useState(name)



    function handleEditClick(){
      
        setIsEditing(editing => !editing)
        if (isEditing){
        onChangeName(symbol, playerName)
        }
    }
        

    function handleOnChange(event){
        setPlayerName(event.target.value)
    }
      
    
    let EditablePlayerName = <span className='player-name'>{playerName} </span>
    if(isEditing){
        EditablePlayerName = <input type='text' value={playerName} required onChange={handleOnChange} />
    }
    return(

        <li className={isActive ? 'active' :undefined}>
            
            <span className="player">
                {EditablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
                <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'} </button>
                

         
        </li>
    );
}