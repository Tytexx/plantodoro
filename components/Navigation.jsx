import React from "react";
import { DiAptana } from "react-icons/di";
import { RiPlantLine } from "react-icons/ri";

export default function Header() {
  return (
    
    <nav className="flex items-center justify-around">
      <div className="flex items-center gap-2 text-[3rem]">
        <RiPlantLine className="text-sm text-black" />
        <h1 className="font-jersey25">Plantodoro</h1>
      </div>

      <div className="settings flex items-center gap-3">
        
        <div className="flex items-center gap-2 cursor-pointer text-[2rem]">
          <DiAptana className="text-sm text-black" />
          <h1 className="font-jersey25">Settings</h1>
        </div>

        <div className="flex items-center gap-2 cursor-pointer text-[2rem]">
          <DiAptana className="text-sm text-black" />
          <h1 className="font-jersey25">Log In</h1>
        </div>

      </div>
    </nav>
  );
}
