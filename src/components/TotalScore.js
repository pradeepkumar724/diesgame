import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="flex justify-center items-center w-28 flex-col">
      <h1 className="text-7xl font-bold">{score}</h1>
      <p className="font-bold">Total Score</p>
    </div>
  );
};

export default TotalScore;
