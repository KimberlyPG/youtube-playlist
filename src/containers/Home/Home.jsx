import { useState, useContext, FormEvent, ChangeEvent, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Video from "../../components/Video/Video";
import SearchBar from "../../components/Search-bar/Search-bar";
import { HomeContainer, VideosContainer } from "./home.styles";

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

    // useEffect(() => {
    //     youtube .get(`search?&q=${name}`)
    //     .then((data) => setData(data.data.items));
    // },[]);

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
            <HomeContainer>
                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />    
                <VideosContainer>
                    {data &&
                    data.map((video) => (
                        <Video video={video} />
                    ))}
                </VideosContainer>
            </HomeContainer>
        </div>
    )
}

export default Home;
