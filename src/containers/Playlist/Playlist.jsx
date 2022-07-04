
import { selectVideo } from "../../features/videos/videoSlice";
import ReactPlayer from 'react-player'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useContext, useEffect } from 'react';
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
        <div>
            <h1>Playlist page</h1>
            {playlist && playlist.map((videos) => (
                <div>
                    <h1>{videos.description}</h1> 
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${videos.id}`}
                        muted={true}
                        controls={false}
                    /> 
                    <button onClick={() => deleteDocumentFromFirebase(videos.id)}>Remove from playlist</button>
                </div>
            ))}
            {/* <button onClick={() => dispatch(getVideo(getPlaylistAndDocuments))}>See videos</button> */}
            {/* <button onClick={getPlaylistAndDocuments}>See videos</button> */}
        </div>
    )
};

export default Playlist;