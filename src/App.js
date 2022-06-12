import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Movies />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
