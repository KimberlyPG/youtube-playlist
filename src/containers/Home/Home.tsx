import { useState, FormEvent, ChangeEvent, FC } from "react";
import { Outlet } from "react-router-dom";

import SearchBar from "../../components/Search-bar/Search-bar";
import Video from "../../components/Video/Video";
import { VideosContainer } from "./home.styles";
import { 
    addSearchList, 
    cleanState, 
    selectSearch 
} from "../../features/search/searchSlice";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import youtube from "../../api/youtube";

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

    // If I want to show recomended results
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
};

export default Home;
