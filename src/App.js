// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Slides from './components/Slides';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/slide' element={ <Slides />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
