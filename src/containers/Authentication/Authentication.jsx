import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { 
    signInWithGooglePopup
} from "../../utils/firebase/firebase";
import { getPlaylistAndDocuments } from "../../utils/firebase/firebase";
import {
    getVideo
  } from '../../features/videos/videoSlice';

const Authentication = () => {

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const data = getPlaylistAndDocuments()

    // useEffect(() => {
    //     if(!!currentUser) {
    //         getPlaylistAndDocuments()
    //         .then((video) => {
    //             dispatch(getVideo(video))
    //         })
    //     }
    // }, [currentUser]);

    // const getPlaylist = () => {
    //     getPlaylistAndDocuments()
    //     .then((video) => {
    //         dispatch(getVideo(video))
    //     })
        // console.log(data);
        // data.map((video) => {
        //     console.log(video)
        // })
    // }
    
    return (
        <div>
            
            Authentication page
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>

            {/* <button onClick={getPlaylist}>See videos</button>s */}
             {/* <button onClick={getPlaylist()}>See videos</button> */}
            {/* <form>
                
            </form> */}
        </div>
    )
}

export default Authentication;
