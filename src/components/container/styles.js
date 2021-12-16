import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity:0;
    transform:translateX(-50px)
}
to {
    opacity: 1;
    transform: translateX(0px);
}
`;

export const ThisContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    margin: 20px 0;
    color: white;
    text-align: center;
    font-size: 38px;
    text-shadow: 3px 2px 2px #474747, 25px 0px 2px rgba(206, 89, 55, 0);
  }

  p {
    font-weight: 600;
    text-shadow: 3px 1px 2px #474747, 25px 0px 2px rgba(206, 89, 55, 0);
    color: white;
    font-size: 17px;
    text-align: center;
    width: 80%;
  }

  img {
    display: none;
    animation: ${appearFromLeft} 1s;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      width: 550px;
    }
  }
`;
