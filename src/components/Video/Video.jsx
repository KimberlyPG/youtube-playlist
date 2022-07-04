import { useEffect, useState, useContext } from 'react';
import ReactPlayer from 'react-player'
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
        title: video.snippet.title
    }
    const addVideoToPlaylist = () => {
        addSong(item, currentUser.uid);
        dispatch(addVideo(item));
    }

    return (
        <div>
            <li>{video.snippet.description}</li>
            {/* <img src={videos.snippet.thumbnails.default.url} /> */}
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${videoId}`}
                muted={true}
                controls={false}
            />
            <button onClick={addVideoToPlaylist}>Add to playlist</button>
        </div>
    )
}

export default Video;
