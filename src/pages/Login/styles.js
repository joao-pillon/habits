import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  img {
    display: none;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      width: 600px;
    }
  }
`;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #ffb703;
  width: 300px;
  height: 300px;
  animation: ${appearFromLeft} 1s;

  h1 {
    margin: 20px 0;
    color: white;
    font-size: 45px;
    text-shadow: 3px 2px 2px #474747, 25px 0px 2px rgba(206, 89, 55, 0);
  }
`;

export const Input = styled.input`
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

export const Button = styled.button`
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 240px;
  height: 40px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #126782;
  background-color: #126782;

  :hover {
    transition: 0.3s;
    border: 1px solid #023047;
    background-color: #023047;
    transform: scale(0.99);
  }
`;