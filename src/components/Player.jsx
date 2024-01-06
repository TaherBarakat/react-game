import { useState } from "react";
export default function Player() {
     const [playerName, setPlayerName] = useState(null);
     const [sub, setSub] = useState(false);

     function handleSub() {
          setSub(true);
     }
     return (
          <section id="player">
               <h2>Welcome {sub ? playerName : "unknown entity"} </h2>
               <p>
                    <input
                         type="text"
                         value={playerName}
                         onChange={(e) => {
                              setPlayerName(e.target.value);
                              setSub(false);
                         }}
                    />
                    <button onClick={handleSub}>Set Name</button>
               </p>
          </section>
     );
}
