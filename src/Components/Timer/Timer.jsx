import { useState } from "react";
let id;
export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [running, isRunning] = useState(false);
  const [c, setC] = useState(0);

  function t() {
    id = setInterval(() => {
      setTimer((timer) => timer + 1);
      //   setC(c + 1); // will not work just first time counter will increase
      //   setTimeout(() => {
      //     setC((c) => c + 1);
      //   }, 1000);
      //     setC((c) => c + 1);
    }, 1000);
  }

  const tHandler = () => {
    if (running) clearInterval(id);
    else t();

    isRunning(!running);
  };

  return (
    <main id="timer">
      <h1>Stopwatch in Timer {c}</h1>
      <h2>
        {(0 + String(Math.floor(timer / 3600))).slice(-2)}:
        {(0 + String(Math.floor(timer / 60) % 60)).slice(-2)}:
        {(0 + String(timer % 60)).slice(-2)}
      </h2>
      <div id="btns">
        <button onClick={tHandler}>{running ? "Stop" : "Start"}</button>
        <button onClick={() => setTimer(0)}>Reset</button>
      </div>
    </main>
  );
}
