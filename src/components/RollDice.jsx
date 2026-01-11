import Styled from "styled-components";
const RollDice = ({currentDice,generateRandomDice}) => {



  return (
    <DiceContainer>
        <div className="dice" onClick={generateRandomDice}>
            <img src={`/images/dices/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
        </div>
        <p>Click to Roll Dice</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = Styled.div`

margin-top: 48px;
display: grid;
justify-content:center;

p{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
}

.dice{
    cursor: pointer;
}


`