import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {

    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

    if (timeRemaning <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaning(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval( () => {
            setTimeRemaning(prevTimeRemaning => prevTimeRemaning - 10);
        }, 10 );
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
      <>
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          remainingTime={timeRemaning}
          onReset={handleReset}
        />

        <section className="challenge">
          <h2>{title}</h2>
          <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
              {timerIsActive ? "Stop" : "Start"} Challege
            </button>
          </p>
          <p className={timerIsActive ? "active" : undefined}>
            {timerIsActive ? "Time in running..." : "Timer inactive"}
          </p>
        </section>
      </>
    );
} 