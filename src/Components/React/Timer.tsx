import React from "react";

export default function Timer(props: {
  id: string;
  delMode: boolean;
  delete: () => void;
}) {
  return (
    <div className="timer">
      <div className="topRow">
        <div className="name">{props.id}</div>
        <div className="button">Start</div>
      </div>
      <div className="time">0s</div>
    </div>
  );
}
