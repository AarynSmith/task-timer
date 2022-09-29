import React, { useEffect, useState } from "react";
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
  const [timer, setTimer] = useLocalStorage<timerData>(`@timers/${props.id}`, {
    ...defaultTimerData,
    id: props.id,
  });

  const [nameInput, setNameInput] = useState(timer.name);
  const [inputActive, setInputActive] = useState(false);

  useEffect(() => {
    let interval: string | NodeJS.Timeout = "";
    if (timer.running) {
      interval = setInterval(() => {
        setTimer({
          ...timer,
          seconds: timer.seconds + 1,
        });
      }, 1000);
    } else if (!timer.running && timer.seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, setTimer]);

  const saveTimerName = () => {
    setTimer({
      ...timer,
      name: nameInput,
    });
    setInputActive(false);
  };
  return (
    <div className="timer">
      <div className="topRow">
        <div
          className="name"
          onClick={() => {
            setInputActive(true);
          }}
        >
          {inputActive ? (
            <input
              autoFocus={true}
              defaultValue={nameInput}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setNameInput(e.currentTarget.value);
              }}
              onBlur={() => {
                saveTimerName();
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === "Tab") {
                  saveTimerName();
                }
              }}
            />
          ) : (
            timer.name
          )}
        </div>
        <button
          className={`${
            props.delMode ? "delete" : timer.running ? "stop" : "start"
          }`}
          onClick={(e: React.MouseEvent) => {
            if (props.delMode) {
              localStorage.removeItem(`@timers/${props.id}`);
              props.delete();
              return;
            }
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
