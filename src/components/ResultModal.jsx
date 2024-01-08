import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
     { result, targetTime },
     ref
) {
     const dialog = useRef();
     useImperativeHandle(ref, () => {
          return {
               open() {
                    dialog.current.showModal();
               },
          };
     });
     return (
          <dialog ref={dialog} className="result-modal">
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
