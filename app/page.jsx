"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";

export default function page() {


  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  const [seconds, setSeconds] = useState(0);

  const [stage, setStage] = useState(0);

  const switchStage = (index) => {
    setStage(index);
  }

  const getTickingName = () => {
    const timeStage = {
      0 : pomodoro,
      1 : shortBreak,
      2 : longBreak
    }
    return timeStage[stage]
  }

  useEffect(() => {
    const timer = setInterval(() => {},1000)

    return () => {
      clearInterval(timer)
    }
  },[])


  return (
    <div className="bg-cyan-700  min-h-screen font-extralight">
      <div className="max-w-6xl min-h-screen mx-auto">
        <Navigation />
        <Timer stage={stage} switchStage = {switchStage} getTickingName = {getTickingName} seconds = {seconds}/>
      </div>
    </div>
  );
}
