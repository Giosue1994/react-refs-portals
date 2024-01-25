import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  const dialog = useRef();

  // useImperativeHandle accetta come valori "ref" e una funzione che ritorna un 
  // oggetto in cui inserire i metodi che devono essere esposti da quedto componente ad un altro
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the time with <strong>X seconds left</strong>.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;