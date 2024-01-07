import { useState, useRef } from "react";
export default function Player() {
     let inputValue = useRef("");

     const [playerName, setPlayerName] = useState(null);

     function handleSub() {
          setPlayerName(inputValue.current.value);
          inputValue.current.value = "";
     }
     return (
          <section id="player">
               <h2>Welcome {playerName ?? "unknown entity"} </h2>
               <p>
                    <input type="text" ref={inputValue} />
                    <button onClick={handleSub}>Set Name</button>
               </p>
          </section>
     );
}
