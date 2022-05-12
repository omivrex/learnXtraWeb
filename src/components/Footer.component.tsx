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
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aliquid esse accusamus optio quia facere officia molestiae inventore aspernatur aliquam. Tempora veniam libero tenetur nihil laudantium amet doloremque, quos quod.
        </p>
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