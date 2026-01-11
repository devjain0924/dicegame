import styled from "styled-components"
import NumberSelector from "./NumberSelector";
const TotalScore = ({totalScore, setTotalScore}) => {
    return (

        <ScoreContainer>
            <h1>{totalScore}</h1>
            <p>Total Score</p>
        </ScoreContainer>


    )
}

export default TotalScore;


const ScoreContainer = styled.div`
    max-width: 200px;
    text-align:center;
    padding-left:70px;
    h1{
        font-size:100px;
        line-height:150px;


    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
 
 
 `