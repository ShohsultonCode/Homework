import React from 'react';
import Navbar from './components/Navbar'
import Users from '../src/pages/Users'
import AddUsers from '../src/pages/Add Users'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/todos' element={<Users/>}/>
        <Route path='/' element={<AddUsers/>}/>

      </Routes>
    </>
  );
};

export default App;