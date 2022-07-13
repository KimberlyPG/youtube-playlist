import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { WatchContainer, VideoContainer, Title, PlaylistContainer, VideosTitle, VideoLink } from "./watch.styles";
import { useAppSelector  } from "../../app/hooks";
import { selectVideo } from "../../features/videos/videoSlice";
import SearchBar from "../../components/Search-bar/Search-bar";

const Watch = ( ) => {
    const state = useLocation();
    const video = state.state.item
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
            <SearchBar />
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