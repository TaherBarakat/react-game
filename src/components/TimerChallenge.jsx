export default function TimerChallenge({ title, targetTime }) {
     return (
          <section className="challenge">
               <h2>{title}</h2>
               <p className="challenge-time"></p>
               {targetTime} second{targetTime > 1 ? "s" : ""}
               <p>
                    <button>start challenge</button>
               </p>
               <p className="">time is is running</p>
          </section>
     );
}
