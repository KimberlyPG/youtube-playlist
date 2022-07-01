import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation'
import Home from './containers/Home/Home';
import Authentication from './containers/Authentication/Authentication';
import Playlist from './containers/Playlist/Playlist';
import { useAppDispatch } from "./app/hooks";
import { getPlaylistAndDocuments } from "./utils/firebase/firebase";
import {
    getVideo
  } from './features/videos/videoSlice';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/user.context';

function App() {

  const dispatch = useAppDispatch();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if(!!currentUser) {
        getPlaylistAndDocuments()
        .then((video) => {
            dispatch(getVideo(video))
        })
    }
  }, [currentUser]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='playlist' element={<Playlist />} />
            <Route path='authentication' element={<Authentication />} />
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;