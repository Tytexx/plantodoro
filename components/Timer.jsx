import React, { useEffect } from "react";
import Plant from "./Plant";

export default function ({
  stage,
  switchStage,
  getTickingName,
  secondsPassed,
  minutesPassed,
  isRunning,
  setIsRunning,
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  useEffect(() => {
    // console.log(secondsPassed);
    console.log(minutesPassed);
    console.log(isRunning);
    
  }, [secondsPassed]);

  return (
    <div className="w-12/12 mx-auto pt-5 text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center">

        {options.map((option, key) => {
          return (
            <h1
              key={key}
              className={`${
                key === stage
                  ? "bg-neutral-50/50 rounded-[5px] font-jersey25 text-3xl"
                  : "bg-neutral-50/20  rounded-[5px] font-jersey25 text-3xl"
              } p-1 cursor-pointer transition-all hover:bg-white/10 hover:scale-105`}
              onClick={() => switchStage(key)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <Plant />
      <div className="mt-10 mb-10">
        <h1 className="text-9xl font-bold select-none m-0 font-jersey25">
          {getTickingName()}:{secondsPassed.toString().padStart(2, "0")}
        </h1>
      </div>
      <button
        className=" px-16 py-2 text-2xl mb-20 bg-white/50 rounded-[8px] cursor-pointer font-jersey25 transition-all hover:scale-105"
        onClick={() => {
          setIsRunning(!isRunning)
        }}
      >
        {isRunning? "Stop" : "Start"}
      </button>
    </div>
  );
}
