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
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
  }

  svg {
    font-size: 45px;
    text-align: left;
    width: 100px;
    cursor: pointer;

    :hover {
      transition: 0.4s;
      transform: scale(1.1);
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > button {
    padding: 10px;
    font-size: 22px;
    display: flex;
    border: 0;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #219ebc;
    cursor: pointer;
    margin: 5px;
  }
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  padding-left: 10px;
  color: black;
  border-radius: 5px;
  border: 1px solid gray;

  &:focus {
    outline-color: #219ebc;
  }

  &::placeholder {
    color: gray;
  }
`;


export const ButtonDashboard = styled.button`
font-size:25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #219ebc;
  background-color: #219ebc;
  position: absolute;
  top: 0%;
  right:1%;

  :hover {
    transition: 0.5s;
    border: 1px solid #023047;
    background-color: #023047;
    transform: scale(0.99);
  }

  @media only screen and (min-width: 768px) {
    right:4%;
  }
`;