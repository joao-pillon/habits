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

 

export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #126782;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top:5px;
`;

export const Button = styled.button`
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 60px;
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

export const Button2 = styled.button`
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 60px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #219ebc;
  background-color: #219ebc;
  position: absolute;
  top: 0%;
  right:18%;

  :hover {
    transition: 0.5s;
    border: 1px solid #023047;
    background-color: #023047;
    transform: scale(0.99);
  }

  @media only screen and (min-width: 768px) {
    right:14%;
  }
  @media only screen and (min-width: 1024px) {
    right:10%;
  }
`
export const Button3 = styled.button`
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 75px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #219ebc;
  background-color: #219ebc;
  position: absolute;
  top: 0%;
  right:35%;

  :hover {
    transition: 0.5s;
    border: 1px solid #023047;
    background-color: #023047;
    transform: scale(0.99);
  }

  @media only screen and (min-width: 768px) {
    right:24%;
  }
  @media only screen and (min-width: 1024px) {
    right:16%;
  }
`;      

export const Groups = styled.div`
  margin-top: 120px;
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:center;
  align-itens: center;
  text-align:center;

  button {
    color: white;
    font-weight: 600;
    cursor: pointer;
    width: 120px;
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

    
  }

  h1 {
    font-family: "Leckerli One", cursive;
    color: white;
    font-size: 20px;
    text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.49);
    margin: 8px;
    margin-left: 15px;
  }

  h1:hover {
    cursor: pointer;
    color:yellow;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
  @media only screen and (min-width: 600px) {
    font-size: 20px;
    margin-left: 24px;
    flex-direction: row;
    margin-top: 50px;
  width: 95%;
  }
`;


export const Group = styled.div`
width: 350px;
`


export const Header = styled.div`
h1{
    
    margin-top: 20px;
    font-size: 24px;
    font-weight: 400;
    text-align:center;
    text-shadow: 4px 4px 2px rgba(0,0,0,0.49);
}

img {
     position: absolute;
     width: 250px;
     bottom: 2%;
     animation: ${appearFromLeft} 1s;
 }
 @media only screen and (max-width: 800px) {
    display: none;
  }
  
`