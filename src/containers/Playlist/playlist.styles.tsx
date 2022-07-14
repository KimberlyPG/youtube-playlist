import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PlaylistContainer = styled.div`
    flex-direction: column;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 3% 5% 5%;
    margin: 2px 2px 2px 2px;
`;

export const PlaylistVideo = styled.div`
    margin-top: 10%;
    img {
        width: 95%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Title = styled.div`
    font-size: 17px;
    height: 57px;
    font-weight: bold;
    font-family: "Roboto","Arial";
    position: relative;
`;

export const PlaylistLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const Icon = styled.div`
    size: 50px;
    opacity: 0.7;
    position: absolute;
    bottom: 20px;
    right: 50px;
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
    position: absolute; left:0px; bottom:0px;
    opacity: 0.8;
    font-size: 10px;
`
