import React, { useState } from "react";
import useLocalStorage from "../../useLocalStorage";
import { v4 as uuidv4 } from "uuid";

import "../Sass/App.scss";
import Timer from "./Timer";

export interface timerData {
  id: string;
  creationTime: number;
}

export default function App() {
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [timers, setTimers] = useLocalStorage<timerData[]>("@app/timers", []);

  const newTimer = () => {
    const timerList = timers.slice();
    timerList.push({
      id: uuidv4(),
      creationTime: new Date().getTime(),
    });
    setTimers(timerList);
  };
  const deleteTimer = (id: string) => {
    let timerList = timers.slice();
    timerList = timerList.filter((v: timerData) => v.id !== id);
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
