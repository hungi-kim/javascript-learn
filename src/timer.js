import React from "react";

function TimerComponent() {
  const [time, TimeFunction] = React.useState(100);
  return (
    <div>
      <h1>{time}</h1>
      <button
        onClick={function () {
          TimeFunction(time * 2);
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default TimerComponent;
