import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

import VideoPlayer from "../../components/Video-player/Video-player";
import { WatchContainer, VideoContainer, Title, PlaylistContainer, VideosTitle, VideoLink, Image } from "./watch.styles";
import { useAppSelector  } from "../../app/hooks";
import { selectVideo } from "../../features/videos/videoSlice";

const Watch = ( ) => {
    const state = useLocation();
    const video = state.state.item
    const playlist = useAppSelector(selectVideo);

    return(
        <WatchContainer>
            <VideoContainer>
                <VideoPlayer video={video.title} videoId={video.id}/>
            <Title>{video.title}</Title>
            </VideoContainer>
            <PlaylistContainer>
                {playlist &&
                playlist.filter((items) => items.id !== video.id).map((item) => (
                    <div>
                        <VideoLink to='/watch' state={{item}}>
                            <Image src={item.image} />
                            <VideosTitle>{item.title}</VideosTitle>
                        </VideoLink>
                    </div>
                ))}
            </PlaylistContainer>
        </WatchContainer>
    )
}

export default Watch;