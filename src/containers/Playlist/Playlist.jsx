
import { useContext } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from "react-icons/ai";
import add from '../../assets/add.gif'
import { useAppSelector, useAppDispatch } from "../../app/hooks";


import { PlaylistContainer, PlaylistVideo, Title, VideoPlayer, Button, PlaylistLink, Icon, NoPlaylist } from './playlist.styles';

import { selectVideo } from "../../features/videos/videoSlice";
import { UserContext } from '../../context/user.context';

import {
    deleteVideo,
  } from '../../features/videos/videoSlice';
import { deleteDocument } from "../../utils/firebase/firebase";
import Watch from '../Watch/Watch';

const Playlist = () => {
    const playlist = useAppSelector(selectVideo);
    const dispatch = useAppDispatch();
    const { currentUser } = useContext(UserContext);
    
    const deleteDocumentFromFirebase = (videoId) => {
        deleteDocument(currentUser, videoId)
        dispatch(deleteVideo(videoId))
    }

    return (
        <PlaylistContainer>
            {playlist &&
            playlist.map((item) => (
                <PlaylistVideo>
                    <VideoPlayer>
                    <Link to='/watch' state={{item}}>
                        <img src={item.image} />
                        <Icon><AiFillPlayCircle color= "red" size= "90px"/></Icon>
                    </Link> 
                        <Button onClick={() => deleteDocumentFromFirebase(item.id)}>Remove</Button> 
                    </VideoPlayer>
                    <PlaylistLink to='/watch'><Title>{item.title}</Title></PlaylistLink>
                </PlaylistVideo>
            ))}
        </PlaylistContainer>
    )
};

export default Playlist;