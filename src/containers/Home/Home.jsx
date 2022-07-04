import { useState, useContext, FormEvent, ChangeEvent, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ReactPlayer from 'react-player'

import Video from "../../components/Video/Video";

import youtube from "../../api/youtube";
import { UserContext } from "../../context/user.context";




// export type DataProps = {
//     description: string;
// }

// type HomeProps = {
//     data: DataProps | undefined;
// }
  
const Home = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    

    const { currentUser } = useContext(UserContext);
    if(currentUser!=null) {
    }

    const key = "AIzaSyD4IEtYHDc08LL9oFXMGLsYoVT_wBrJ8ec";
    const handleSubmit = (event) => {
        event.preventDefault();
        youtube .get(`search?&q=${name}`)
        .then((data) => setData(data.data.items));
    }

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    return (
        <div>
            <Outlet />
            {/* Home page */}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            {data && data.map((video) => (
                 <Video video={video} />
            ))}
            {/* if(currentUser!=null){
                    <h1>Welcome {currentUser.displayName}</h1>
                    }
                    else {
                        <h3>go to login</h3>
                    } */}
        </div>
    )
}

export default Home;
