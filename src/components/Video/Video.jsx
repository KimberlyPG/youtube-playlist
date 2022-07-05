import { useEffect, useState, useContext } from 'react';
import ReactPlayer from 'react-player'

import { VideoContainer } from './video.styles';

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
        id: videoId, 
        title: video.snippet.title,
        image: video.snippet.thumbnails.high.url
    }
    const addVideoToPlaylist = () => {
        addSong(item, currentUser.uid);
        dispatch(addVideo(item));
    }

    return (
        <VideoContainer>
            {video.snippet.title}
            {/* <img src={videos.snippet.thumbnails.default.url} /> */}
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width= "90%"
                height="90%"
            />
            <button onClick={addVideoToPlaylist}>Add to playlist</button>
        </VideoContainer>
    )
}

export default Video;
