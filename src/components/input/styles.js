import styled, { keyframes } from "styled-components";

export const thisInput = styled.input`
width: 240px;
height: 40px;
padding-left: 10px;
margin: 10px 0;
border-radius: 5px;
border: 1px solid gray;

:focus {
  outline-color: #219ebc;
}

::placeholder {
  color: gray;
}
`;