import React, {ReactElement} from "react";
import phone from "../assets/phone.png"
import {IoLogoGooglePlaystore} from "react-icons/io5"
import {ImEarth} from "react-icons/im"
const OApps = ():ReactElement => {
  return (
    <div style={styles.container}>
      <div style={styles.imgCol}>
        <img src={phone} alt="" />
      </div>
      <div style={styles.contentCol}>
        <h1 style={{fontSize: '8.8vw', margin: '0', fontFamily: "Yanone Kaffeesatz, sans-serif"}}>Download</h1>
        <h3 style={{margin: 0, fontSize: '7.6vw'}}>Our App</h3>
        <p style={styles.p}>
          The JUPEB Study App has been carefully and specially
          prepared to meet the needs of both students and tutors 
          preparing for the 'almighty' JUPEB exams. It covers a variety 
          of recurring A-level exam topics in Mathematics, Physics, 
          Chemistry and Biology. 
        </p>
        <p style={styles.p}>
          You can download our mobile app on the Google 
          playstore or check out our web alternative.
        </p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <a style={styles.link} href="https://play.google.com/store/apps/details?id=com.learnxtra.jupebstudyapp">Google Playstore <IoLogoGooglePlaystore color="#07b907" size={'2rem'} style={{marginLeft: 'auto'}}/></a>
          <a style={styles.link} href="https://jupebstudyappios.web.app/">Web <ImEarth color="#07b907" size={'2rem'} style={{marginLeft: 'auto'}}/></a>
        </div>
      </div>
    </div>
  ) 
}

export default OApps

const styles = {
  container: {
    margin: '3rem auto',
    marginBottom: 0,
    width: '70%',
    flexWrap: 'wrap' as any,
    display: 'flex',
    // backgroundColor: '#531d5c',
    position: 'relative'as any,
    justifyContent: 'space-evenly',
    height: 'fit-content',
    alignItems: 'center',
    flexDirection: 'row' as any,
  },

  imgCol: {
    flex: 0.6,
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
  },

  contentCol: {
    display: 'flex',
    flex: 0.5,
    minWidth: '17rem',
    justifyContent: 'center',
    flexDirection: 'column' as any,
    textAlign: 'center' as any,
    margin: '3rem auto',
  },

  p: {
    textAlign: 'left' as any,
  },

  link: {
    height: '3rem',
    width: '36%',
    padding: '0.2em 1em',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#eee',
    display: 'flex',
    backgroundColor: '#000'
  }
}