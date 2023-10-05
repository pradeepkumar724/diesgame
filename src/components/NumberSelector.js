import React, { useState } from "react";

const NumberSelector = () => {
  const numberarray = [1, 2, 3, 4, 5, 6];
  const [selectedNumbers, setSelectedNumbers] = useState();

  console.log(selectedNumbers);

  return (
    <div className="flex items-end flex-col">
      <div className="flex justify-center items-center">
        {numberarray.map((value, i) => (
          <div
            className="font-bold h-10 w-10 border-black border-2 m-1 place-items-center grid"
            key={i}
            onClick={() => setSelectedNumbers(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="font-bold text-xl text-right  d">Selected Numbers</p>
    </div>
  );
};

export default NumberSelector;
