import React, { useState } from "react";
import Dise1 from "../assests/dice_1.png";

const RoleDise = () => {
  const [currentDies, setCurrentDies] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDise = () => {
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDies((prav) => randomNumber);
  };

  return (
    <div>
      <div
        className="flex items-center flex-col w-full mt-20 cursor-pointer"
        onClick={roleDise}
      >
        <img src={Dise1} alt={`dies ${currentDies}`} className="w-52" />
        <p className="font-bold text-lg">Click on Dice to roll</p>
        {currentDies}
      </div>
    </div>
  );
};

export default RoleDise;
