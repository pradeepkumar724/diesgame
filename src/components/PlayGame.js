import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDise from "./RoleDise";

const PlayGame = () => {
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto pt-12">
        <TotalScore />
        <NumberSelector />
      </div>
      <RoleDise />
    </div>
  );
};

export default PlayGame;
