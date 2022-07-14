import { useContext } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { VideoContainer, Title, Icon, VideoPlayer, Button, VideoLink } from './video.styles';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../app/hooks';
import {
    addVideo
  } from '../../features/videos/videoSlice';
import { addSong } from '../../utils/firebase/firebase';
import { UserContext } from '../../context/user.context';

const Video = ({ video }) => {
    const videoId = video.id.videoId;
    const dispatch = useAppDispatch();
    const { currentUser } = useContext(UserContext);

    const item = {
        id: video.id.videoId, 
        title: video.snippet.title,
        image: video.snippet.thumbnails.high.url
    }

    const addVideoToPlaylist = () => {
        addSong(item, currentUser.uid);
        dispatch(addVideo(item));
    }

    return (
        <VideoContainer>
            {/* <PlaylistVideo> */}
            <VideoPlayer>
                <VideoLink to='/watch' state={{item}}>
                    <img src={item.image} />
                    <Icon><AiFillPlayCircle color= "red" size= "90px"/></Icon>
                    <Title>{item.title}</Title>
                    {/* <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${videoId}`}
                        width= "90%"
                        height="90%"
                    /> */}
                </VideoLink>
                <Button onClick={addVideoToPlaylist}>Add to playlist</Button>
            </VideoPlayer>       
            {/* </PlaylistVideo> */}
        </VideoContainer>
    )
}

export default Video;
