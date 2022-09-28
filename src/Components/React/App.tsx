import React from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { v4 as uuidv4 } from "uuid";

import "../Sass/App.scss";
import Timer from "./Timer";

export interface timerData {
  id: string;
  creationTime: number;
}

export default function App() {
  const [isDeleteMode, setDeleteMode] = useLocalStorage(
    "@app/deleteMode",
    false
  );

  const [timers, setTimers] = useLocalStorage("@app/timers", [] as timerData[]);

  const newTimer = () => {
    const timerList = timers.slice();
    timerList.push({
      id: uuidv4(),
      creationTime: new Date().getTime(),
    });
    setTimers(timerList);
  };
  const deleteTimer = (id: string) => {
    console.log(`Deleting Timer ${id}`);
    let timerList = timers.slice();
    console.log(`TimerList is ${timerList.length} items`);
    timerList = timerList.filter((v: timerData) => v.id !== id);
    console.log(`TimerList is ${timerList.length} items`);

    setTimers(timerList);
  };

  return (
    <div id="appContainer">
      <div className="timerContainer">
        {timers
          .sort((a: timerData, b: timerData) => a.creationTime - b.creationTime)
          .map((v: timerData) => (
            <Timer
              key={v.id}
              id={v.id}
              delMode={isDeleteMode}
              delete={() => {
                deleteTimer(v.id);
              }}
            />
          ))}
      </div>
      <div className="buttonBar">
        <div className="buttonRow">
          {!isDeleteMode ? (
            <button className="add" onClick={() => newTimer()}>
              Add Timer
            </button>
          ) : (
            <></>
          )}
          <button
            className="delete"
            onClick={() => {
              console.log("Toggling delete mode");
              setDeleteMode(!isDeleteMode);
            }}
          >
            {isDeleteMode ? "Return" : "Delete Timer"}
          </button>
        </div>
      </div>
    </div>
  );
}
