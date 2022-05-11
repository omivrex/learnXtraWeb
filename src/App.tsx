import React from 'react';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AboutJ from './components/AboutJ.compoenent';
import Navbar from './components/Navbar.component';
import Home from './components/Home.component';
import Services from './components/Services.component';
import OApps from './components/OApps.component';
import Events from './components/Events.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutJUPEB' element={<AboutJ/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/OurApps' element={<OApps/>}/>
      </Routes>
    </Router>
  );
}

export default App;
