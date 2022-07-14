import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { WatchContainer, VideoContainer, Title, PlaylistContainer, VideosTitle, VideoLink, ReactPlay } from "./watch.styles";
import { useAppSelector  } from "../../app/hooks";
import { selectVideo } from "../../features/videos/videoSlice";

const Watch = ( ) => {
    const state = useLocation();
    const video = state.state.item
    const playlist = useAppSelector(selectVideo);

    return(
        <WatchContainer>
            <VideoContainer>
                <ReactPlay>
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${video.id}`}
                        controls = {true}
                        // width= "1200px"
                        // height= "663px"
                        width= "100%"
                        height= "100%"
                        object-fit= "cover"
                    /> 
                </ReactPlay> 
            <Title>{video.title}</Title>
            </VideoContainer>
            <PlaylistContainer>
                {playlist &&
                playlist.filter((items) => items.id !== video.id).map((item) => (
                    <div>
                        <VideoLink to='/watch' state={{item}}>
                            <img src={item.image} />
                            <VideosTitle>{item.title}</VideosTitle>
                        </VideoLink>
                    </div>
                ))}
            </PlaylistContainer>
        </WatchContainer>
    )
}

export default Watch;