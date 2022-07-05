
import { useContext } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../../app/hooks";


import { PlaylistContainer, PlaylistVideo, Title, VideoPlayer, Button, PlaylistLink, Icon } from './playlist.styles';

import { selectVideo } from "../../features/videos/videoSlice";
import { UserContext } from '../../context/user.context';
import {
    deleteVideo,
  } from '../../features/videos/videoSlice';
import { deleteDocument } from "../../utils/firebase/firebase";

const Playlist = () => {
    const playlist = useAppSelector(selectVideo);
    const dispatch = useAppDispatch();
    const { currentUser } = useContext(UserContext);
    console.log("state: ", playlist);
    // const deleteFromPlaylist = () => dispatch(deleteVideo(playlist.id))

    const deleteDocumentFromFirebase = (videoId) => {
        deleteDocument(currentUser, videoId)
        dispatch(deleteVideo(videoId))
    }

    return (
        <PlaylistContainer>
            {/* <h1>Playlist page</h1> */}
            {playlist &&
            // playlist.filter((_, idx) => idx < 4 )  
            playlist.map((videos) => (
                <PlaylistVideo>
                    <VideoPlayer>
                    <Link to='/watch'>
                        {/* <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${videos.id}`}
                            width= "95%"
                            height="95%"
                        />   */}
                        <img src={videos.image} />
                        <Icon><AiFillPlayCircle color= "red" size= "90px"/></Icon>
                    </Link> 
                        <Button onClick={() => deleteDocumentFromFirebase(videos.id)}>Remove</Button> 
                    </VideoPlayer>
                    <PlaylistLink to='/watch'><Title>{videos.title}</Title></PlaylistLink>
                </PlaylistVideo>
            ))}
        </PlaylistContainer>
    )
};

export default Playlist;