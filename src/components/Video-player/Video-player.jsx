const VideoPlayer = ({ title, videoId }) => {
    return (
      <iframe
        className="youtube"
        title={title}
        width="1180px"
        height="664px"
        frameborder='0'
        src={`https://www.youtube.com/embed/${videoId}`}
        allowfullscreen="allowfullscreen"
      ></iframe>
    );
  }
  
  export default VideoPlayer;