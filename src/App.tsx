import React from 'react';
import './App.css';

//REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//COMPONENTS IMPORTS
import MainPage from './components/MainPage';
import NextPage from './components/NextPage';

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
