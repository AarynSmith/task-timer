import React from "react";
// import { useLocalStorage } from "../../useLocalStorage";

import "../Sass/App.scss";
import Timer from "./Timer";

export default function App() {
  // const [countHookExample, setCountHookExample] = useLocalStorage("@count", 0);

  const timers = [
    "Timer 1",
    "Timer 2",
    "Timer 3",
    "Timer 4",
    "Timer 5",
    "Timer 6",
    "Timer 7",
    "Timer 8",
  ];
  return (
    <div id="appContainer">
      <div className="timerContainer">
        {timers.map((v) => (
          <Timer
            key={v}
            id={v}
            delMode={false}
            delete={() => {
              console.log(`Deleting ${v}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
