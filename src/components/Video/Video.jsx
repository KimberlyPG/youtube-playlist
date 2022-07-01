import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { useAppDispatch } from '../../app/hooks';
import {
    addVideo
  } from '../../features/videos/videoSlice';

const Video = ({ video }) => {
    const videoId = video.id.videoId;
    const dispatch = useAppDispatch();
    // const { playlist } = useAppSelector((state) => state.video )
    const [item, setItem] = useState({});
    
    const addVideoToPlaylist = () => dispatch(addVideo(item))
    
    useEffect(() => {
        {setItem({
            id: videoId,
            description: video.snippet.description,
            url: `https://www.youtube.com/watch?v=${videoId}`,
        })}
        
    }, [videoId, video.snippet.description]);

    return (
        <div>
            <li>{video.snippet.description}</li>
            {/* <img src={videos.snippet.thumbnails.default.url} /> */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`}/>
            <button onClick={addVideoToPlaylist}>Add to playlist</button>
        </div>
    )
}

export default Video;
// const ejemplo = [
//     {
//         description: video.snippet.description,
//         url: `https://www.youtube.com/watch?v=${videoId}`
//     },
//     {
//         description: video.snippet.description,
//         url: `https://www.youtube.com/watch?v=${videoId}`
//     },
// ]