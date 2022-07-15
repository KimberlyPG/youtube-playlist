import moment from "moment";
import { FC, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from '../../context/user.context';
import { 
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase/firebase";

import logo from '../../assets/icon.svg.webp';
import noUser from '../../assets/no-user.jpg';
import { LogoContainer, Title, Hour, NavigationContainer, NavLinks, NavLink } from "./navigation.styles";

export type NavigationProps = {
    photoURL: string;
}

const Navigation: FC<NavigationProps> = () => { 
      
    const { currentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const windowWidth = window.innerWidth;

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
                    <Link to='/'><img src={currentUser.photoURL} /></Link>
                    ) : (
                    <Link to='/'><img src={noUser} /></Link>
                    )}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </div>
    )
}

export default Navigation;