import styled, { keyframes } from "styled-components";

export const thisForm = styled.form`
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