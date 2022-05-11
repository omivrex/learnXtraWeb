import React from 'react';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutJ from './components/AboutJ.compoenent';
import Navbar from './components/Navbar.component';
import Home from './components/Home.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutJUPEB' element={<AboutJ/>}/>
      </Routes>
    </Router>
  );
}

export default App;
