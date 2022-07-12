import { Link } from "react-router-dom";
import styled from "styled-components";

export const VideoContainer = styled.div`
    flex-direction: column;
    margin-bottom: 30px;
    display: grid;
    padding: 0 3% 10% 0;
    margin: 2px 2px 2px 2px;

    margin-top: 10%;
        img {
            width: 95%;
            height: 100%;
            object-fit: cover;
        }
    `;

export const Title = styled.div`
    font-size: 16px;
    height: 57px;
    font-weight: bold;
    font-family: "Roboto","Arial";
    position: relative;
`;

export const VideoLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


export const Icon = styled.div`
    size: 50px;
    opacity: 0.7;
    position: absolute;
    bottom: 30px;
    right: 70px;
    display: none;
    border: none;
`

export const VideoPlayer = styled.div`
    height: 200px;
    position: relative;
    
    &:hover {
        img {
            opacity: 0.8;
        }

        ${Icon} {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const Button = styled.button`
    position: absolute; right:30px; bottom:0px;
    opacity: 0.8;
    font-size: 12px;
    // color: red;
    // border: none;
`
