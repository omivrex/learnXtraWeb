import styles from '../footer.module.css'
import { ReactElement } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = ():ReactElement => {
    return ( 
      <footer className={styles.footer}>
        <h1>Powered By LEARNXTRA</h1>
        <p>
          We provide a range of educational support services for 
          school leavers, undergraduate students, postgraduate 
          students and tertiary institutions across Nigeria and beyond.
        </p>
        <h2>Get in touch with LearnXtra:</h2>
        <section className={styles.contactInfo}>
          <a style={{margin: 'auto', width: '8%'}} href={'mailto:learnextra2@gmail.com'}>
              <SiGmail size={'100%'} color={'#ff5722'}/>
          </a>
          <a style={{margin: 'auto', width: '8%'}} href={'https://wa.me/+2348067124123'}>
              <IoLogoWhatsapp size={'100%'} color={'#4caf50'}/>
          </a>
          <a style={{margin: 'auto', width: '8%'}} href={'tel:+2348067124123'}>
              <BsFillTelephoneFill size={'100%'} color={'#0164b3'}/>
          </a>
        </section>
      </footer>
     );
}
 
export default Footer;