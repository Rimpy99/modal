import React from 'react';
import './App.css';

//REACT ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//COMPONENTS IMPORTS
import MainPage from './components/MainPage/MainPage';
import NextPage from './components/NextPage/NextPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='modal' element={<MainPage/>}/>
          <Route path='/nextPage' element={<NextPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
