import Dies from "../assests/dices.jpg";

const Homepage = (props) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen  container">
      <div className="hidden md:block">
        <img src={Dies} alt="Homepage-Dies" className="w-[500px]" />
      </div>
      <div>
        <h1 className="text-3xl font-bold md:text-8xl md:font-bold">
          Dies Game
        </h1>
        <button
          onClick={props.toggleGamePlay}
          className="rounded border bg-black text-white text-md font-semi md:text-2xl bold px-8 py-1 md:px-12 md:py-[5px] mt-3 md:ml-2 md:hover:bg-white md:hover:text-black md:hover:border-black md:hover:rounded md:hover:border md:hover:bg-zinc-400 md:transition-all md:ease-in-out md:duration-300"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Homepage;
