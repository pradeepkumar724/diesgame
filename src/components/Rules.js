import React from "react";

const Rules = () => {
  return (
    <div className="w-10/12 mx-auto bg-rose-100 p-4 mt-5 md:max-w-3xl  rounded">
      <h1 className="font-bold text-xl pb-4">How to play dice game</h1>
      <p className="text-sm font-semibold pb-1">Select any number</p>
      <p className="text-sm font-semibold pb-1">Click on dice image</p>
      <p className="text-sm font-semibold pb-1">
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p className="text-sm font-semibold pb-1">
        if you get wrong guess then 2 point will be dedcuted{" "}
      </p>
    </div>
  );
};

export default Rules;
