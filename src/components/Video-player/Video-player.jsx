const windowWidth = window.innerWidth;

const VideoPlayer = ({ title, videoId }) => {
    return (
      <iFrame
        className="youtube"
        title={title}
        // width="1180px"
        height={windowWidth > 1120 ? ("680px"): windowWidth < 540? ("200px"):("460px")}
        width= "100%"
        // height= "100%"
        frameborder='0'
        src={`https://www.youtube.com/embed/${videoId}`}
        allowfullscreen="allowfullscreen"
      ></iFrame>
    );
  }
  
  export default VideoPlayer;

  // height={windowWidth > 1120 ? ("680px"): windowWidth > 1120 ? ("460px")}