import React from "react";
import Plant from "./Plant";

export default function ({stage, switchStage}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  return (
    <div className="w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center">
        {options.map((option, key) => {
          return (
            <h1
              key={key}
              className={`${
                key === stage ? "bg-neutral-50/50 rounded-[5px]" : "bg-neutral-50/20  rounded-[5px]"
              } p-1 cursor-pointer transition-all hover:text-[1.1rem]`} onClick={() => switchStage(key)}
            >
              {option}
            </h1>
          );
        })}
      </div>
        <Plant/>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none m-0 ">25:00</h1>
      </div>
      <button className=" px-16 py-2 text-2xl bg-white/50 rounded-[2px] cursor-pointer">Start</button>
    </div>
  );
}
