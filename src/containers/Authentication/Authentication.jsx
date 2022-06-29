import { Outlet } from "react-router-dom";
import { 
    signInWithGooglePopup
} from "../../utils/firebase/firebase";

const Authentication = () => {

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div>
            <Outlet />
            Authentication page
            <form action="">
                <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
            </form>
        </div>
    )
}

export default Authentication;
