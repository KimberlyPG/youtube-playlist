import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navigation = () => {
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <Link to='/home'>HOME</Link> 
        </div>
    )
}

export default Navigation;