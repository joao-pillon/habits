import styled, { keyframes } from "styled-components";

export const ThisContainer = styled.div`
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
