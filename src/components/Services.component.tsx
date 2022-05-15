import React, {ReactElement} from "react";
import { GiTeacher } from 'react-icons/gi';
import tutorial from "../assets/tutorial.jpg";
import assign from "../assets/assign.jpg";

const Services = ():ReactElement => {
  return (
    <div style={{...styles.container, ...{flexDirection: 'column'}}}>
        <div style={{... styles.header, ...{textAlign: 'center', flexDirection: 'column', justifyContent: 'center'}}}>
          <h1 style={{borderBottom: '2px solid #eee'}}>What We Do</h1>
          <p style={{width: '70%', margin: '0 auto'}}>
            At LearnXtra, we believe that education is the key that unlocks the door to numerous opportunities in life. Thus, we want everyone to find learning easy and interesting.
            We provide a range of educational support services for school leavers, undergraduate students, postgraduate students and tertiary institutions across Nigeria and beyond. 
          </p>
        </div>

        <div style={{... styles.header, ...{flexDirection: 'column', textAlign: 'center', justifyContent: 'center'}}}>
          <h1 style={{borderBottom: '2px solid #eee', textAlign: 'center'}}>Our solutions include:</h1>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <img width={'90%'} src={tutorial}/>
              Tutorials
            </li>
            <li style={styles.li}>
              <img width={'90%'} src={assign  }/>
              Assignments
            </li>
            <li style={styles.li}>
              Academic research work <br /> (term papers, project, thesis)
            </li>
            <li style={styles.li}>
              Virtual graduate assistant
            </li>
          </ul>
          <p>
            Our promise is quality and effective solutions, on-time delivery, and excellent customer service.
          </p>
        </div>

        
    </div>
  ) 
}

const styles = {
  container: {
    margin: '3rem auto',
    width: '90%',
    display: 'flex',
    alignItems: 'center'
  },

  header: {
    backgroundColor: '#531d5c',
    color: '#eee',
    width: '100%',
    height: '21rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  ul: {
    display: 'flex', 
    width: '100%',
    flexDirection: 'row' as any,
    aligItems: 'center' as any,
    justifCcontent: 'space-between',
  },

  li: {
    listStyle: 'none',
    width: '15rem',
    height: '15rem',
    // backgroundColor: '#eee',
    display: 'flex',
    color: '#eee',
    justifyContent: 'sapce-arround',
    flexDirection: 'column' as any,
    alignItems: 'center'
  }
}

export default Services