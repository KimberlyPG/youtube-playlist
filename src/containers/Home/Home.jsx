import { Outlet } from "react-router-dom";
import { useState, React, FormEvent, ChangeEvent, FC } from "react";
import ReactPlayer from 'react-player'
import youtube from "../../api/youtube";


// export type DataProps = {
//     description: string;
// }

// type HomeProps = {
//     data: DataProps | undefined;
// }
  
const Home = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");

    const key = "AIzaSyD4IEtYHDc08LL9oFXMGLsYoVT_wBrJ8ec";
    const handleSubmit = (event) => {
        event.preventDefault();
        youtube .get(`search?&q=${name}`)
        .then((data) => setData(data.data.items));
        // .then((data) => setItems(data.items));
        // console.log("data: ", data);
    }
    console.log("data: ", data);

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
            {data && data.map((videos) => (
                <div>
                    <li>{videos.snippet.description}</li>
                    {/* <img src={videos.snippet.thumbnails.default.url} /> */}
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${videos.id.videoId}`}/>
                </div>
            ))}
            {/* <div>
                <h1>data.items[0]</h1>
            </div> */}
            
        </div>
    )
}

export default Home;
