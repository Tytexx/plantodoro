"use client";
import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import Modal from "@/components/Modal";
import Settings from "@/components/Settings";

export default function page() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  const [stage, setStage] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  const switchStage = (index) => {
    setIsRunning(false);
    setStage(index);
    switch (index) {
      case 0:
        setPomodoro(25);
      case 1:
        setShortBreak(5);
      case 2:
        setLongBreak(10);
    }
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

  const [secondsPassed, setSecondsPassed] = useState(0);

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
    if (secondsPassed < 0) {
      switch (stage) {
        case 0:
          setPomodoro((prev) => {
            return prev - 1;
          });
        case 1:
          setShortBreak((prev) => {
            return prev - 1;
          });
        case 2:
          setLongBreak((prev) => {
            return prev - 1;
          });
          setSecondsPassed(59);
      }
    }
  }, [secondsPassed]);

  return (
    <div>
      <div className="bg-blue-400 min-h-screen font-extralight">
        <div className="max-w-6xl min-h-screen mx-auto">
          <Navigation />
          {/* <Modal /> */}
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
      <div className="">
        <Settings />
      </div>
    </div>
  );
}
