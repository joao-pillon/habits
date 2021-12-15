import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
`;

export const Header = styled.header`
  height: 90px;
  width: 90%;
  background-color: #ffb703;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    cursor: pointer;
    display: flex;
    width: 130px;
    margin-left: 15px;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-size: 25px;
    }

    svg {
      font-size: 45px;
    }
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
