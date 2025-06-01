import React, { useState } from "react";

export default function Settings() {
    const [change, setChange ] = useState(true)
    
  return (
    <div className="bg-sky-200 h-200">
      <div className="items-center flex flex-col gap-6">
        <h1 className="text-black mt-10 font-mono text-[2rem] ">Settings</h1>
        <h2 className="text-black m-10 font-mono text-[1.5rem] ">Timer Settings</h2>

        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Pomodoro
          </label>
          <input
            type="number"
            className="Minutes text-[black] font-mono w-15 bg-white/50 rounded-[4px]"
          />
        </div>
        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Short Break
          </label>
          <input
            type="number"
            className="Minutes text-[black] font-mono w-15 bg-white/50 rounded-[4px]"
          />
        </div>{" "}
        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Long Break
          </label>
          <input
            type="number"
            className="Minutes text-[black] font-mono w-15 bg-white/50 rounded-[4px]"
          />
        </div>
        <div className="bg-green-500/50 p-2 rounded-[6px] m-2">Succesfully Applied Changes</div>
        <button className="text-black px-16 py-2 text-2xl m-2 bg-white/50 rounded-[8px] cursor-pointer font-mono transition-all duration-300 ease-in-out hover:scale-105">
          Apply
        </button>
      </div>
      <div className="items-center flex flex-col gap-6">
    </div>
    </div>
  );
}
