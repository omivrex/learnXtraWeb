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
        <h4>
          At LearnXtra, we believe that education is the key that
          unlocks the door to numerous opportunities in life. Thus, 
          we want everyone to find learning easy and interesting.
        </h4>
        <Link to='/apps'><span>Get The App</span></Link>
      </div>
    </section>

    <section>
      <Link to='/Services'><div className="siteContent">Our Services</div></Link>
      <Link to='/aboutJUPEB'><div className="siteContent">About The Programme</div></Link>
      <Link to='/Contact'><div className="siteContent">Contact Us</div></Link>
      <Link to='/OurApps'><div className="siteContent">Our Apps</div></Link>
    </section>
  </div>
  )
}

export default Home