import moment from "moment";
import { FC, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from '../../context/user.context';
import { 
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase/firebase";
import { getPlaylistAndDocuments } from "../../utils/firebase/firebase";

import logo from '../../assets/icon.svg.webp';
import noUser from '../../assets/no-user.jpg';
import { LogoContainer, Title, Hour, NavigationContainer, NavLinks, NavLink, SignOut } from "./navigation.styles";

const Navigation = () => {  
    const { currentUser } = useContext(UserContext);

    if(currentUser !== null) {
    console.log(currentUser.photoURL);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const windowWidth = window.innerWidth;
    console.log(windowWidth);

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
                    <img src={currentUser.photoURL} onClick={signOutUser} />
                    ) : (
                    <img src={noUser} onClick={signInWithGoogle} alt="Sign in" />
                    )}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </div>
    )
}

export default Navigation;