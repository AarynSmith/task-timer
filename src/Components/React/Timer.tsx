import React from "react";
import { useLocalStorage } from "../../useLocalStorage";
import { formatTime } from "../../Utilities";

export interface timerData {
  id: string;
  name: string;
  seconds: number;
  running: boolean;
}

export const defaultTimerData: timerData = {
  id: "",
  name: "Timer",
  seconds: 0,
  running: false,
};

export default function Timer(props: {
  id: string;
  delMode: boolean;
  delete: () => void;
}) {
  const [timer, setTimer] = useLocalStorage(`@timers/${props.id}`, {
    ...defaultTimerData,
    id: props.id,
  });

  return (
    <div className="timer">
      <div className="topRow">
        <div className="name">{timer.name}</div>
        <button
          className={`${
            props.delMode ? "delete" : timer.running ? "stop" : "start"
          }`}
          onClick={(e) => {
            if (props.delMode) {
              props.delete();
              return;
            }
            console.log(e);
            setTimer({
              ...timer,
              running: !timer.running,
            });
          }}
        >
          {props.delMode ? "Delete" : timer.running ? "Stop" : "Start"}
        </button>
      </div>
      <div className="time">{formatTime(timer.seconds)}</div>
    </div>
  );
}
