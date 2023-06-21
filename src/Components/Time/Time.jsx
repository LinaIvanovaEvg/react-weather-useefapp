import React from "react";
import { useRef, useEffect, useState } from "react";
import "./Time.css";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const refTime = useRef();

  useEffect(() => {
    refTime.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(refTime.current);
    };
  });
  return (
    // <div>{time.slice(0, -3)}</div>
    <p className="time-wrapper">{time}</p>
  );
}

export default Time;
