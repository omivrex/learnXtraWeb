import React, { ReactElement } from "react";
import logo from '../logo.png';
import { Link } from "react-router-dom";

const Home = ():ReactElement => {
  return (
    <div className="App">
    <section className='banner'>
      <img id='logo' src={logo} alt="App logo" />
      <div className='bannerContent'>
        <h1>LEARNXTRA</h1>
        <h3>Assurance In Your A-Level Exam</h3>
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui molestiae magnam nihil sunt quos fugit assumenda atque et hic, soluta aperiam? Quasi temporibus facere debitis officia perferendis sunt provident placeat?</h4>
        <span>Get The App</span>
      </div>
    </section>

    <section>
      <Link to='/services'><div className="siteContent">Our Services</div></Link>
      <Link to='aboutJUPEB'><div className="siteContent">About The Programme</div></Link>
      <Link to='/events'><div className="siteContent">FAQs</div></Link>
      <Link to='/OurApps'><div className="siteContent">Our Apps</div></Link>
    </section>
  </div>
  )
}

export default Home