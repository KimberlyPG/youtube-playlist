import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PlaylistContainer = styled.div`
    flex-direction: column;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 3% 5% 5%;
    margin: 2px 2px 2px 2px;

    @media (max-width: 1120px) {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 450px) {
        & {
            width: 100%;
            margin: auto;
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
