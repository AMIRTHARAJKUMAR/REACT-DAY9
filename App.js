import React from 'react'
import Home from './day9/Home';
import NavBar from './day9/Navbar';
import Singers from './day9/Singers';
import Albums from './day9/Albums';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
    <> 
      <div>
      <NavBar/>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/singers' element={<Singers />}></Route>
            <Route path='/albums' element={<Albums />}></Route>
        </Routes>
      </div>
    </>
  )
}