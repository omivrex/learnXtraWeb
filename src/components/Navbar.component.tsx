import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
const styles = {
  nav: {
    width: '100vw',
    height: '3rem',
    background: '#9c27b0',
    display: 'flex',
    alignItems: 'center',
    zIndex: 5,
    color: '#eee',
    top: 0,
    justifyContent: 'space-between'
  },

  span: {
    padding: '2rem',
    fontSize: '0.8em',
  }
}

const Navbar = ():ReactElement => {
  return (
    <nav style={{... styles.nav, ...{position: 'fixed'}}}>
      <Link to='/' style={{textDecoration: 'none', color: '#eee'}}><span style={styles.span}>JupebStudyApp.com</span></Link>
      <Link to='/apps' style={{textDecoration: 'none', color: '#eee'}}><span style={styles.span}>Get The App</span></Link>
      
    </nav>
  )
}

export default Navbar