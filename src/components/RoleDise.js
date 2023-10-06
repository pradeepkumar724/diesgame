import React from "react";

const RoleDise = ({ currentDies, roleDise }) => {
  return (
    <div>
      <div
        className="cursor-none flex items-center flex-col w-full mt-20 md:cursor-pointer"
        onClick={roleDise}
      >
        <img
          src={`/images/dice_${currentDies}.jpg`}
          alt={`dics ${currentDies}`}
          className="w-36 mt-6 md:w-58"
        />

        <p className="font-bold text-md md:text-lg">Click on Dice to roll</p>
      </div>
    </div>
  );
};

export default RoleDise;
