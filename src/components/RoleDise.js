import React from "react";
import Dise1 from "../assets/dice_1.jpg";

const RoleDise = ({ currentDies, roleDise }) => {
  return (
    <div>
      <div
        className="flex items-center flex-col w-full mt-20 cursor-pointer"
        onClick={roleDise}
      >
        <img src={Dise1} alt={`dics ${currentDies}`} className="w-52" />
        <p className="font-bold text-lg">Click on Dice to roll</p>
        {currentDies}
      </div>
    </div>
  );
};

export default RoleDise;
