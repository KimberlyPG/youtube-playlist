import { FC } from "react";

import { 
    signInWithGooglePopup
} from "../../utils/firebase/firebase";

const Authentication: FC = () => {

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
