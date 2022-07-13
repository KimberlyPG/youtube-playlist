import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { 
    signInWithGooglePopup
} from "../../utils/firebase/firebase";

const Authentication = () => {

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div>         
            Authentication page
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default Authentication;
