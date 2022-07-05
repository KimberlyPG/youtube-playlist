import Video from "../../components/Video/Video";

const VideosList = ({ data }) => {
    return (
        <>
            {data && data.map((video) => (
                <Video video={video} />
            ))}
       </>
    )
}

export default VideosList;
