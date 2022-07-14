import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const WatchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    // @media screen and (max-width: 1024px) {
    //     flex-direction: column;
    //     display: grid;
    //     grid-template-columns: repeat(1, 1fr); 
    // }

    // @media screen and (max-width: 768px) {
        
    // }

    // @media screen and (max-width: 480px) {
        
    // }
`

export const VideoContainer = styled.div`
    padding: 3% 0 0 6%;
    width: 1170px;
    height: 658px;
    left: 0px;
    top: 0px;
    position: relative;

    @media screen and (max-width: 1024px) {
        // width: 640px;
        // height: 360px;
        left: 0px;
        top: 0px;
        margin-top: 10%;
        position: absolute;
    }

    @media screen and (max-width: 768px) {
        // width: 932px;
        // height: 524px;
        left: 0px;
        top: 0px;
        margin-top: 10%;
        position: absolute;
    }

    @media screen and (max-width: 480px) {
        // width: 932px;
        // height: 524px;
        left: 0px;
        top: 0px;
        margin-top: 10%;
        position: absolute;
    }
`;

export const ReactPlay = styled.div`
    width: 100%;
    height: 100%;
    // height: 100%;
    object-fit: cover;
`

export const Title = styled.div`
    padding-top: 1%;
    font-size: 18px;
    font-family: Roboto;
    font-weight: bold;
`

export const PlaylistContainer = styled.div`
    overflow-y: scroll;
    padding: 3% 3% 0 0;
    height: 730px;
    width: 29%;
        img {
            width: 200px;
            height: 110px; 
            object-fit: cover;
            margin-bottom: 5px;
            &:hover {
                opacity: 0.8;
                }
        }
`

export const VideosTitle = styled.div`
    font-size: 14px;
    color: black;
    width: 300px;
    // display: inline-block
`

export const VideoLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
`