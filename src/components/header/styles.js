import styled from "styled-components";

export const ThisHeader = styled.h1`

font-family: 'Leckerli One', cursive;
color: white;
font-size: 24px;
text-shadow: 1px 3px 2px rgba(0,0,0,0.49);
margin: 8px;
margin-left: 15px;
:after {
    content: "Reading Habits";
}
@media only screen and (min-width: 600px)  {
    font-size: 25px;
    margin-top: 4px;
    margin-left: 24px;
}
`;

