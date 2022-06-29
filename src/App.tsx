import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation'
import Home from './containers/Home/Home';
import Authentication from './containers/Authentication/Authentication';
import Playlist from './containers/Playlist/Playlist';

function App() {
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