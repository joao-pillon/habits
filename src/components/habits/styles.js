import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: #ffb703;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    color: black;

    h2{
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;
        color: #023047;
    }
    p{
        color: #023047;
    }

    & > button{
        padding: 5px;
        font-size: 15px;
        background-color: #023047;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 400px) {
        width: 300px;
    }
`;

export const DivButtons = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;

    p{
        width: 50%;
        margin: 0;
        padding: 7px;
        font-size: 15px;
        color: black;
        text-align: center;
        border-top: 1px solid #219EBC;
        border-bottom: 1px solid #219EBC;
    }

    button{
        width: 25%;
        background-color: #219EBC;
        border: 1px solid #219EBC;
        padding: 7px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover{
        background-color: #023047;
        border: 1px solid #023047;
        transition: 0.5s;
        transform: scale(0.99);
    }

    button:first-child{
        border-radius: 10px 0 0 10px;
    }
    button:last-child{
        border-radius: 0 10px 10px 0;
    }
`;
