import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity:0;
    transform:translateX(50px)
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ffb703;
  width: 300px;
  height: 350px;
  animation: ${appearFromLeft} 2s;

  div {
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
    margin: 25px 0 33px 0;

    h1 {
      margin: 10px 0 25px 0;
    }
  }
`;

export const Search = styled.section`
  
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding-left: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid gray;

  &:focus {
    outline-color: #219ebc;
  }

  &::placeholder {
    color: gray;
  }
`;
