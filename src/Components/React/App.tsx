import "../Sass/App.scss";
// React
import React from "react";
// Assets

// import { useLocalStorage } from "../../useLocalStorage";

export default function App() {
  // const [countHookExample, setCountHookExample] = useLocalStorage("@count", 0);

  const timers = new Array(11).fill("timer");
  return (
    <div className="appContainer">
      <div className="timerContainer">
        {timers.map((v, i) => (
          <div key={i} className="timer">
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}
