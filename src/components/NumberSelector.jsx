import styled from "styled-components";
const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);

  const handleNumberSelect = (value) => {
    setSelectedNumber(value);
    setError("");
  }
  return (
    <>
      <NumberSelectorContainer>

        <p id="error">{error}</p>
        <div className="flex">
          {arrNumber.map((value, i) => {
            return <Box
              isSelected={
                value === selectedNumber
              }
              key={i} onClick={()=>handleNumberSelect(value)}>{value}</Box>;
          })}
        </div>
        <p id="text">Select Number</p>

      </NumberSelectorContainer>

    </>
  )
}

export default NumberSelector



const Box = styled.div`
height:72px;
width:72px;
border:2px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
/* border-radius:8px; */
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};
cursor: pointer;

`

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;

.flex{
  display:flex;
  gap:24px;
}
#text{
  font-size: 24px;
  font-weight: 700;

}

#error{
  color:red;
  font-size: 24px;

}
`