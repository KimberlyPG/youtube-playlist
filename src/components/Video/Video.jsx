import { useContext } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

import { VideoContainer, Title, Icon, VideoPlayer, Button, VideoLink, VideoAdded } from './video.styles';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { deleteDocument } from "../../utils/firebase/firebase";
import {
    addVideo, selectVideo, deleteVideo
  } from '../../features/videos/videoSlice';


import { addSong } from '../../utils/firebase/firebase';
import { UserContext } from '../../context/user.context';

const Video = ({ video }) => {
    const dispatch = useAppDispatch();
    const playlist = useAppSelector(selectVideo);
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

    const deleteDocumentFromFirebase = (videoId) => {
        deleteDocument(currentUser, videoId)
        dispatch(deleteVideo(videoId))
    }

    const butonCondition = playlist.some(video => video.id === item.id);
       
    return (
        <VideoContainer>
            <VideoPlayer>
                <VideoLink to='/watch' state={{item}}>
                    <img src={item.image} />
                    <Icon><AiFillPlayCircle color= "red" size= "90px"/></Icon>
                    <Title>{item.title}</Title>
                </VideoLink>
                    {butonCondition ? (
                        <Button onClick={() => deleteDocumentFromFirebase(item.id)}>Delete from playlist</Button>
                    ) : (
                        <Button onClick={addVideoToPlaylist}>Add to playlist</Button>
                    )}
                    
            </VideoPlayer>       
        </VideoContainer>
    )
};

export default Video;
