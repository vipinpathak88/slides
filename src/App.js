// import logo from './logo.svg';
import React, { Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import Slides from './components/Slides';

const Home = lazy(()=>import('./components/Home'));
const Slides = lazy(()=>import('./components/Slides'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Please wait</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='slides' element={ <Home />} />
            <Route path='slides/slide' element={ <Slides />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
