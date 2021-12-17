import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  img {
    width: 300px;
    position: absolute;
    bottom: 5%;
    left: 2%;
  }`;

export const Profile = styled.header`
  height: 75px;
  width: 85%;
  background-color: #ffb703;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  div {
    cursor: pointer;
    display: flex;
    margin-left: 15px;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 22px;
    }

    svg {
      font-size: 45px;
    }
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

export const Button1 = styled.button`
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

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  width: 80px;
  height: 400px;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 15px 15px 0;

  svg {
    font-size: 70px;
    cursor: pointer;

    fill: #fff;
  }

  p {
    cursor: pointer;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 13px;
    background-color: #ffb703;
    color: #023047;
    border-radius: 100%;
    height: 60px;
    width: 60px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: 0.3s;
    animation-duration: 0.7s;
    animation-name: slidein;

    @keyframes slidein {
      0% {
        margin-bottom: -50px;
      }
      50% {
        margin-bottom: 13px;
      }
      100% {
        margin-bottom: 8px;
      }
    }

    :hover {
      transform: scale(1.08);
    }
  }

  @media (min-width: 768px) {
    bottom: 30px;
    right: 50px;
  }

  @media (min-width: 1440px) {
    bottom: 50px;
    right: 90px;
  }
`;
