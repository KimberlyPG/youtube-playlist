import { useState, useContext, FormEvent, ChangeEvent, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import SearchBar from "../../components/Search-bar/Search-bar";
import VideosList from "../../components/Videos-list/Videos-list";
import { HomeContainer } from "./home.styles";

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
    console.log("dat", data);

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    return (
        <div>
            <Outlet />
            <HomeContainer>
                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />    
                <VideosList data={data} />
            </HomeContainer>
        </div>
    )
}

export default Home;
