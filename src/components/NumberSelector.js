import React from "react";

const NumberSelector = ({
  setError,
  error,
  selectedNumbers,
  setSelectedNumbers,
}) => {
  const numberarray = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumbers(value);
    setError("");
  };

  // console.log(selectedNumbers);
  // const isSelected = {value === selectedNumbers};

  return (
    <div className="flex items-end flex-col">
      <p className="text-red-500 font-semibold text-md pb-1">{error}</p>
      <div className="flex justify-center items-center">
        {numberarray.map((value, i) => (
          <div
            className={` ${
              value === selectedNumbers ? "bg-black text-white" : "bg-white"
            } font-bold h-10 w-10 border-black border-2 m-1 place-items-center grid`}
            key={i}
            onClick={() => numberSelectorHandler(value)}
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
