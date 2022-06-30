
import { selectVideo } from "../../features/videos/videoSlice";
import ReactPlayer from 'react-player'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    deleteVideo
  } from '../../features/videos/videoSlice';

const Playlist = () => {
    const playlist = useAppSelector(selectVideo);
    const dispatch = useAppDispatch();
    // const deleteFromPlaylist = () => dispatch(deleteVideo(playlist.id))

    console.log("paylist ", playlist);

    // const videoToRemove = () => {
    //     playlist.find((item) => item.id === )
    // }

    return (
        <div>
            <h1>Playlist page</h1>
            {playlist && playlist.map((videos) => (
                <div>
                    <h1>hola</h1>
                    <h1>{videos.description}</h1> 
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.url}`}/> 
                    <button onClick={() => dispatch(deleteVideo(videos.id))}>Remove from playlist</button>
                </div>
            ))}
        </div>
    )
};

export default Playlist;