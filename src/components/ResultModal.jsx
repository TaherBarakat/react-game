import { forwardRef } from "react";
const ResultModal = forwardRef(function ResultModal(
     { result, targetTime },
     ref
) {
     return (
          <dialog ref={ref} className="result-modal">
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
});

export default ResultModal;
