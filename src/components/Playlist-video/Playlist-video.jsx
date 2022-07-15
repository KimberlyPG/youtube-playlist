import { Link } from 'react-router-dom';
import { AiFillPlayCircle } from "react-icons/ai";

import { PlaylistVideoContainer, Title, VideoPlayer, Button, PlaylistLink, Icon } from './playlist-video.styles';

const PlaylistVideo = ({ item, deleteDocumentFromFirebase }) => {
    return (
        <PlaylistVideoContainer>
            <VideoPlayer>
                <Link to='/watch' state={{item}}>
                    <img src={item.image} />
                    <Icon><AiFillPlayCircle color= "red" size= "90px"/></Icon>
                </Link> 
                    <Button onClick={() => deleteDocumentFromFirebase(item.id)}>Remove</Button> 
                </VideoPlayer>
            <PlaylistLink to='/watch'><Title>{item.title}</Title></PlaylistLink>
        </PlaylistVideoContainer>
    )
};

export default PlaylistVideo;