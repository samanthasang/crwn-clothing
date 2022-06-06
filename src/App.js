import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import Shoppage from './pages/shop/shop';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/shop' element={<Shoppage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
