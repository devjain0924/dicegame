import styled from "styled-components";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button ,Buttonv } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


    const generateRandomDice = () => {
        if (selectedNumber === undefined) {
            setError("You have not selected any number");
            return;
        }
        
        const randomNumber = (Math.floor(Math.random() * 6) + 1);
        setCurrentDice((prev) => randomNumber);

        if (randomNumber === selectedNumber) {
            setTotalScore((prev) => prev + randomNumber);
        }
        else {
            setTotalScore((prev) => prev -  2);
        }


        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setTotalScore(0);
    }

    const toggleRules = () => {
        setShowRules(!showRules);
    }





    return (
        <>
            <MainContainer>
                <div className="top_section">
                    <TotalScore totalScore={totalScore} setTotalScore={setTotalScore} />
                    <NumberSelector
                        error={error}
                        setError={setError}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber} />
                </div>
                <RollDice currentDice={currentDice} generateRandomDice={generateRandomDice} />
                <div className="btns">
                    <Buttonv onClick={resetScore}>Reset Score</Buttonv>
                    <Button onClick={toggleRules} >{showRules? "Hide" : "Show"} Rules</Button>
                </div>
                {showRules && <Rules/>}
            </MainContainer>
        </>
    )
}

export default GamePlay;

const MainContainer = styled.main`
.top_section{
    display:flex;
    justify-content:space-between;
    align-items:end;
    padding-right:70px;
}

.btns{
    margin-top: 40px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:20px;
}
 

`
