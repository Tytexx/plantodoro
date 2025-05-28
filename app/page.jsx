"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";

export default function page() {


  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  const [stage, setStage] = useState(0);

  const switchStage = (index) => {
    setStage(index);
  }

  return (
    <div className="bg-cyan-700  min-h-screen font-extralight">
      <div className="max-w-6xl min-h-screen mx-auto">
        <Navigation />
        <Timer stage={stage} switchStage = {switchStage}/>
      </div>
    </div>
  );
}
