import React from "react";

export default function Settings() {
  return (
    <div className="bg-sky-200 h-200">
      <div className="items-center flex flex-col gap-6">
        <h1 className="text-black m-10 font-mono text-[2rem] ">Settings</h1>
        
        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Pomodoro
          </label>
          <input type="text" className="Minutes text-[black] font-mono bg-white/50 rounded-[4px]" />
        </div>
        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Short Break
          </label>
          <input type="text" className="Minutes text-[black] font-mono bg-white/50 rounded-[4px]" />
        </div>{" "}
        <div className="flex justify-between gap-8">
          <label htmlFor="" className="text-blue-400">
            Long Break
          </label>
          <input type="text" className="Minutes text-[black] font-mono bg-white/50 rounded-[4px]" />
        </div>
        
      </div>
    </div>
  );
}
