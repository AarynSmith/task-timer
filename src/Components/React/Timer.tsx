import React, { useState } from "react";

export default function Timer(props: {
  id: string;
  delMode: boolean;
  delete: () => void;
}) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="timer">
      <div className="topRow">
        <div className="name">{props.id}</div>
        <button
          className={`${
            props.delMode ? "delete" : isRunning ? "stop" : "start"
          }`}
          onClick={(e) => {
            if (props.delMode) {
              props.delete();
              return;
            }
            console.log(e);
            setIsRunning(!isRunning);
          }}
        >
          {props.delMode ? "Delete" : isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div className="time">0s</div>
    </div>
  );
}
