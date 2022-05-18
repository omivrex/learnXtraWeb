import {ReactElement} from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = ():ReactElement => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Contact Us</h1>
        <p style={{width: '70%', margin: '0 auto'}}>
          You can Contact Us through Our Eamil, Whatsapp or Phone Number
        </p>
        <p style={styles.contactWraper}>
          <a style={styles.link} href={'mailto:learnextra2@gmail.com'}>
            <SiGmail size={'100%'} color={'#ff5722'}/>
            learnextra2@gmail.com
          </a>
          <a style={styles.link} href={'https://wa.me/+2348067124123'}>
            <IoLogoWhatsapp size={'100%'} color={'#4caf50'}/>
            +2348067124123
          </a>
          <a style={styles.link} href={'tel:+2348067124123'}>
            <BsFillTelephoneFill size={'100%'} color={'#0164b3'}/>
            +2348067124123
          </a>
        </p>
      </div>
    </div>
  ) 
}

const styles = {
  container: {
    margin: '3rem auto',
    marginBottom: 0,
    width: '100%',
    display: 'flex',
    backgroundColor: '#531d5c',
    position: 'relative'as any,
    height: 'fit-content',
    alignItems: 'center',
    flexDirection: 'column' as any,
  },

  header: {
    color: '#eee',
    width: '100%',
    padding: '10rem 0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center' as any,
    flexDirection: 'column' as any,
    justifyContent: 'center' as any,
    // justifyContent: 'space-between',
  },

  h1: {
    textDecoration: 'underline'
  },

  contactWraper: {
    width: '90%',
    height: '7rem',
    margin: '6rem auto',
    display: 'flex',
    flexWrap: 'wrap' as any,
    // flexDirection: 'column' as any,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },

  link: {
    height: '3rem',
    margin: '2rem auto',
    // width: '100%',
    // display: 'flex',
    // alignItems: 'center',
    textDecoration: 'none',
    color: '#eee'
  }
}

export default Contact