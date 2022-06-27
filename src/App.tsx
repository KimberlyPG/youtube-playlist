import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navigation from './containers/Navigation/Navigation';
import Home from './containers/Home/Home';

function App() {
  return (
      // <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Navigation />} /> */}
            <Route path='home' element={<Home />} />
        </Routes>
      // </BrowserRouter> 
  );
}

export default App;