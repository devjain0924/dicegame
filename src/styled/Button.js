import styled from "styled-components";


export const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
width:220px;
border:2px solid black;
font-size: 16px;
transition: all 0.4s ease;
cursor: pointer;

&:hover {
    background-color: white;
    color: black;
    transition: all 0.4s ease;

}
`
export const Buttonv = styled(Button)`

background: #ffffff;
color: black;
&:hover {
    background-color: black;
    color: #ffffff;
  
}
`