export default function ResultModal({ result, targetTime }) {
     return (
          <dialog className="result-modal" open>
               <h2>you {result} </h2>

               <p>
                    the target time was <strong>{targetTime} seconds</strong>{" "}
               </p>
               <p>
                    you stoped the timer at<strong>X second</strong>
               </p>
               <form method="dialog">
                    <button>close</button>
               </form>
          </dialog>
     );
}
