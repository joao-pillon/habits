import styled, { keyframes } from "styled-components";

export const ThisButton = styled.button`
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