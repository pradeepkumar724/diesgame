import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame.js";
import PlayGame from "./components/PlayGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStarted((prevState) => !prevState);
  };
  return (
    <div className="App">
      {isGameStarted ? (
        <PlayGame />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </div>
  );
}

export default App;
