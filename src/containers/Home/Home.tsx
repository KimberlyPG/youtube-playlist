import { useState, useContext, FormEvent, ChangeEvent, FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import SearchBar from "../../components/Search-bar/Search-bar";
import Video from "../../components/Video/Video";
import { VideosContainer } from "./home.styles";

import youtube from "../../api/youtube";
import { UserContext } from "../../context/user.context";
import { addSearchList, cleanState, selectSearch } from "../../features/search/searchSlice";


export type VideoProps = {
    id: string;
    image: string;
    url: string;
}

const Home: FC = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();

    const searchList = useAppSelector(selectSearch);

    const { currentUser } = useContext(UserContext);
    if(currentUser!=null) {
    }

    // useEffect(() => {
    //     youtube .get(`search?&q=${name}`)
    //     .then((data) => setData(data.data.items));
    // },[]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        youtube .get(`search?&q=${name}`)
        .then((data) => {setData(data.data.items);
            dispatch(cleanState([]));
            dispatch(addSearchList(data.data.items));
        })
    }
 
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value);
    }

    return (
        <>
            <Outlet />
                <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />   
                <VideosContainer>
                    {data && 
                        data.map((video) => (
                            <Video video={video} />
                        ))
                    }  
                    { (searchList[0] && data.length == 0) && 
                        (searchList[0].map((video: VideoProps) => (
                            <Video key={video.id} video={video} />
                        )))
                    }
                </VideosContainer> 
        </>
    )
}

export default Home;
