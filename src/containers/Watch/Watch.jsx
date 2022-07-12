import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { WatchContainer, VideoContainer, Title, PlaylistContainer, VideosTitle, VideoLink } from "./watch.styles";
import { useAppSelector  } from "../../app/hooks";
import { selectVideo } from "../../features/videos/videoSlice";
import Playlist from "../Playlist/Playlist";

const Watch = ( ) => {
    const state = useLocation();
    const video = state.state.videos
    console.log(state.state.videos);
    const playlist = useAppSelector(selectVideo);

    return(
        <WatchContainer>
            <VideoContainer>
                <ReactPlayer 
                    url={`https://www.youtube.com/watch?v=${video.id}`}
                    controls = {true}
                    width= "1200px"
                    height= "663px"
                />  
            <Title>{video.title}</Title>
            </VideoContainer>
            <PlaylistContainer>
                {playlist &&
                playlist.filter((item) => item.id !== video.id).map((videos) => (
                    <div>
                        <VideoLink to='/watch' state={{videos}}>
                            <img src={videos.image} />
                            <VideosTitle>{videos.title}</VideosTitle>
                        </VideoLink>
                    </div>
                ))}
            </PlaylistContainer>
        </WatchContainer>
    )
}

export default Watch;