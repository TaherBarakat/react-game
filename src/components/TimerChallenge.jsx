import ResultModal from "./ResultModal";
import { useState, useRef } from "react";
export default function TimerChallenge({ title, targetTime }) {
     const timer = useRef();
     const dialog = useRef();
     const [timerStarted, setTimerStarted] = useState(false);
     const [timerExpired, setTimerExpired] = useState(false);
     function handleStart() {
          timer.current = setTimeout(() => {
               setTimerExpired(true);
               dialog.current.showModal();
          }, targetTime * 1000);
          setTimerStarted(true);
          console.log("start");
     }

     function handleStop() {
          clearTimeout(timer.current);
          console.log("stop");
     }
     return (
          <>
               <ResultModal
                    ref={dialog}
                    result="lost"
                    targetTime={targetTime}
               />

               <section className="challenge">
                    <h2>{title}</h2>
                    {/* {timerExpired && <p>you lost</p>} */}
                    <p className="challenge-time">
                         {targetTime} second{targetTime > 1 ? "s" : ""}
                    </p>

                    <p>
                         <button
                              onClick={timerStarted ? handleStop : handleStart}
                         >
                              {timerStarted ? "stop" : "start"} challenge
                         </button>
                    </p>
                    <p className={timerStarted ? "active" : undefined}>
                         {timerStarted
                              ? "time is is running"
                              : "timer inactive"}
                    </p>
               </section>
          </>
     );
}
