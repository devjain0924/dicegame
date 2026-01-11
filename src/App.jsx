import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {

  const[isGameStarted,setIsGameStarted] = useState(false);

  const toggleGameStart = () => {
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>
    {isGameStarted? <GamePlay/> :<StartGame  toggle={toggleGameStart}/>}
    </>
  )
}

export default App
