import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className='banner'>
        <div className='bannerContent'>
          <h1>LEARNXTRA</h1>
          <h3>Assurance In Your A-Level Exam</h3>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestiae magnam nihil sunt quos fugit assumenda atque et hic, soluta aperiam? Quasi temporibus facere debitis officia perferendis sunt provident placeat?</h4>
          <span>Get The App</span>
        </div>
        <img id='logo' src={logo} alt="App logo" />
      </section>

      <section>
        <div>Our Services</div>
        <div>About JUPEB</div>
        <div>Recent Activities</div>
        <div>Resources</div>
      </section>
    </div>
  );
}

export default App;
