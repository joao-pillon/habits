import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    display: flex;
    margin: 0 10px 10px 0;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FB8500;

    h2{
        font-size: 20px;
        font-weight: 700;
        color: black;
        margin-bottom: 10px;
    }
    div{
        width: 100%;
    }
    div span, div p{
        color: rgb(49, 49, 49);
    }
    div p{
        margin-bottom: 10px;
    }

    @media (min-width: 400px){
        width: 350px;
    }
`;