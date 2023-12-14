import React from 'react';
//import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {
  return (
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/Signup" element={<SignUp/>} />
    //   </Routes>
    <Login/>
  );
};

export default App;