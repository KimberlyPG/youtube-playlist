import { FC, useContext } from 'react';

import PlaylistVideo from '../../components/Playlist-video/Playlist-video';
import { useAppSelector, useAppDispatch } from "../../app/hooks";


import { PlaylistContainer} from './playlist.styles';

import { selectVideo } from "../../features/videos/videoSlice";
import { UserContext } from '../../context/user.context';

import {
    deleteVideo,
  } from '../../features/videos/videoSlice';
import { deleteDocument } from "../../utils/firebase/firebase";

const Playlist: FC = () => {
    const playlist = useAppSelector(selectVideo);
    const dispatch = useAppDispatch();
    const { currentUser } = useContext(UserContext);
    
    const deleteDocumentFromFirebase = (videoId: string) => {
        deleteDocument(currentUser, videoId)
        dispatch(deleteVideo(videoId))
    }

    return (
        <PlaylistContainer>
            {playlist &&
            playlist.map((item) => (
                <PlaylistVideo  item={item} deleteDocumentFromFirebase={deleteDocumentFromFirebase}/>
            ))}
        </PlaylistContainer>
    )
};

export default Playlist;