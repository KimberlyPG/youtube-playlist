import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation'
import Home from './containers/Home/Home';
import Playlist from './containers/Playlist/Playlist';
import Watch from './containers/Watch/Watch';

import { useAppDispatch } from "./app/hooks";
import { getPlaylistAndDocuments } from "./utils/firebase/firebase";
import { onAuthStateChangedListener } from './utils/firebase/firebase';
import {
    getVideo,
    cleanState
  } from './features/videos/videoSlice';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/user.context';
import { connectFirestoreEmulator } from 'firebase/firestore';

function App() {

  const dispatch = useAppDispatch();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if(!!currentUser) {
        getPlaylistAndDocuments(currentUser)
        .then((video) => {
            dispatch(getVideo(video));
        })
    } else {
        dispatch(cleanState([]));
    }
  }, [currentUser]);
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='playlist' element={<Playlist />} />
            <Route path='watch' element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;