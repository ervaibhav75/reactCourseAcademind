import { useRef, useState } from "react";

export default function Player() {
  const[userName, setUserName] = useState("Anonymous User")
  const playerName = useRef(); 

  function handleClick(){
    setUserName(playerName.current.value)
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName?userName:"anonymous user"}</h2>
      <p>

        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
