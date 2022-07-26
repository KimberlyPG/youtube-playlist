import moment from "moment";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { 
    LogoContainer, 
    Title, 
    Hour, 
    NavigationContainer, 
    NavLinks, 
    NavLink 
} from "./navigation.styles";

import { 
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase/firebase";
import { UserContext } from '../../context/user.context';
import logo from '../../assets/icon.svg.webp';
import noUser from '../../assets/no-user.jpg';



const Navigation = () => { 
      
    const { currentUser } = useContext(UserContext);

    const userImage = currentUser?.photoURL;

    const windowWidth = window.innerWidth;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div>
            <NavigationContainer>
                {windowWidth > 450 ? (
                    <LogoContainer to='/'> 
                    <img src={logo} alt="" />
                    <Title>YOUTUBE</Title>
                    <Hour>{moment().format('h:mm:ss a')}</Hour>
                    </LogoContainer>
                    
                ) : (
                    <LogoContainer to='/'>
                    <img src={logo} alt="" />
                    </LogoContainer>
                )}
                <NavLinks>
                    <NavLink to='/'>HOME</NavLink> 
                    <NavLink to='/playlist'>PLAYLIST</NavLink> 
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink as='span' onClick={signInWithGoogle}>SIGN IN</NavLink>
                    )}
                    {currentUser ? (
                    <Link to='/'><img src={userImage}/></Link>
                    ) : (
                    <Link to='/'><img src={noUser} /></Link>
                    )}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </div>
    )
};

export default Navigation;
