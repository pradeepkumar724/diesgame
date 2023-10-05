import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDise from "./RoleDise";
import Rules from "./Rules";

const PlayGame = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(0);
  const [currentDies, setCurrentDies] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const [error, setError] = useState("");
  const [score, setScore] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDise = () => {
    if (!selectedNumbers) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDies((prav) => randomNumber);

    if (selectedNumbers === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumbers(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const showRulesHandler = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between items-center container mx-auto pt-12">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
          setError={setError}
        />
      </div>
      <RoleDise currentDies={currentDies} roleDise={roleDise} />
      <div className="flex items-center flex-col gap-3 mt-6">
        <button
          onClick={resetScore}
          className="rounded border bg-white w-52 text-black border-black text-md font-semibold md:text-xl bold px-8 py-1 md:px-12 md:py-[5px]  md:ml-2 md:hover:bg-black md:hover:text-white md:hover:border-black md:hover:rounded md:hover:border md:hover:bg-zinc-400 md:transition-all md:ease-in-out md:duration-300"
        >
          Reset Score
        </button>
        <button
          onClick={showRulesHandler}
          className="rounded border bg-black w-52 text-white text-md font-semibold md:text-xl bold px-8 py-1 md:px-12 md:py-[5px]   md:ml-2 md:hover:bg-white md:hover:text-black md:hover:border-black md:hover:rounded md:hover:border md:hover:bg-zinc-400 md:transition-all md:ease-in-out md:duration-300"
        >
          {`${showRules ? "Hide" : "Show"}`} Rules
        </button>
      </div>
      {showRules && <Rules />}
    </div>
  );
};

export default PlayGame;
