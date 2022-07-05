import Video from "../Video/Video";
import { VideosContainer } from '../Videos-list/videos-list.styles';

const VideosList = ({ data }) => {
    return (
        <div>
        <VideosContainer>
            {data &&
            // data.filter((_, idx) => idx < 4 ) 
            data.map((video) => (
                <Video video={video} />
            ))}
       </VideosContainer>
       </div>
    )
}

export default VideosList;
