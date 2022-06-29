import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import logo from '../../assets/icon.svg.webp';
import { LogoContainer, NavigationContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation: FC = () => {
    return (
        <div>
            <NavigationContainer>
                    <LogoContainer to='/'>
                        <img src={logo} alt="" />
                    </LogoContainer>
                    <NavLinks>
                        <NavLink to='/'>HOME</NavLink> 
                        <NavLink to='/playlist'>PLAYLIST</NavLink> 
                        <NavLink to='/authentication'>LOGIN</NavLink>
                    </NavLinks>
                
            </NavigationContainer>
            <Outlet />
        </div>
    )
}

export default Navigation;