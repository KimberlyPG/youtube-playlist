import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const WatchContainer = styled.div`
    display: flex;
    // width: 900px;
    justify-content: space-between;
    margin: 30px auto;
`

export const VideoContainer = styled.div`
    padding: 3% 0 0 6%;
`;

export const Title = styled.div`
    padding-top: 1%;
    font-size: 18px;
    font-family: Roboto;
    font-weight: bold;
`

export const PlaylistContainer = styled.div`
padding: 3% 4% 0 0;
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