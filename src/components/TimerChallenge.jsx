import { useRef, useState } from "react";

export default function TimerChallenge({title, targetTime}) {

    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout( () => {
            setTimerExpired(true);
        }, targetTime * 1000 );

        setTimerStarted(true);
        // console.log("start");
    }

    function handleStop() {
        clearTimeout(timer.current);
        // console.log('stop');
    }

    return (
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challege
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time in running..." : "Timer inactive"}
        </p>
      </section>
    );
} 