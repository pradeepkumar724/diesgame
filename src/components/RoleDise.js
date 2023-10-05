import React from "react";

const RoleDise = ({ currentDies, roleDise }) => {
  return (
    <div>
      <div
        className="flex items-center flex-col w-full mt-20 cursor-pointer"
        onClick={roleDise}
      >
        <img
          src={`/images/dice_${currentDies}.jpg`}
          alt={`dics ${currentDies}`}
          className="w-58"
        />

        <p className="font-bold text-lg">Click on Dice to roll</p>
      </div>
    </div>
  );
};

export default RoleDise;
