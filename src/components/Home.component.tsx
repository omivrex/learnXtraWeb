import React, { ReactElement } from "react";
import logo from '../logo.png';
import { Link } from "react-router-dom";

const Home = ():ReactElement => {
  return (
    <div className="App">
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
      <Link to='/services'><div className="siteContent">Our Services</div></Link>
      <Link to='aboutJUPEB'><div className="siteContent">About JUPEB</div></Link>
      <Link to='/events'><div className="siteContent">Ongoing Events</div></Link>
      <Link to='/OurApps'><div className="siteContent">Our Apps</div></Link>
    </section>
  </div>
  )
}

export default Home