"use client";
import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";

export default function page() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);


  const [stage, setStage] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  const switchStage = (index) => {
    setIsRunning(false);
    setStage(index);
    setSecondsPassed(0);
    
  };

  const getTickingName = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };

    return timeStage[stage];
  };

  const [secondsPassed, setSecondsPassed] = useState(59);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSecondsPassed((prev) => {
        const updated = prev - 1;

        console.log(updated);
        return updated;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [stage, isRunning]);

  useEffect(() => {
    if (secondsPassed <= 0) {
      setPomodoro((prev) => {
        return prev - 1;
      });
      setSecondsPassed(59);
    }
  }, [secondsPassed]);

  return (
    <div className="bg-cyan-700  min-h-screen font-extralight">
      <div className="max-w-6xl min-h-screen mx-auto">
        <Navigation />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingName={getTickingName}
          secondsPassed={secondsPassed}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
        />
      </div>
    </div>
  );
}
