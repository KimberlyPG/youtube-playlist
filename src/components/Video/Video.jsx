import { useEffect, useState, useContext } from 'react';
import ReactPlayer from 'react-player'
import { useAppDispatch } from '../../app/hooks';
import {
    addVideo
  } from '../../features/videos/videoSlice';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase';
import { UserContext } from '../../context/user.context';

const Video = ({ video }) => {
    const videoId = video.id.videoId;
    const dispatch = useAppDispatch();
    const [item, setItem] = useState([]);
    const { currentUser } = useContext(UserContext);
    // console.log("user", currentUser);


    const addVideoToPlaylist = () => {
        setItem(item => [...item, {
            id: videoId,
            description: video.snippet.description,
        }])
        // dispatch(addVideo(item));
        // addCollectionAndDocuments('playlist', item, currentUser.uid);
    }
    console.log(item);
    
    
    // useEffect(() => {

    //     setItem.push({
    //         id: videoId,
    //         description: video.snippet.description,
    //         // url: `https://www.youtube.com/watch?v=${videoId}`,
    //     })
        
    // }, [videoId, video.snippet.description]);

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