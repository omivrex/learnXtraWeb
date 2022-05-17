import {ReactElement} from "react";
import tutorial from "../assets/tutorial.jpg";
import assign from "../assets/assign.jpg";
import research from "../assets/research.jpg";
import graduate from "../assets/graduate.jpg";

const Services = ():ReactElement => {
  return (
    <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.h1}>What We Do</h1>
          <p style={{width: '70%', margin: '0 auto'}}>
            At LearnXtra, we believe that education is the key that unlocks the door to numerous opportunities in life. Thus, we want everyone to find learning easy and interesting.
            We provide a range of educational support services for school leavers, undergraduate students, postgraduate students and tertiary institutions across Nigeria and beyond. 
          </p>
          <p>
            Our promise is quality and effective solutions, on-time delivery, and excellent customer service.
          </p>
        </div>

        <div style={styles.header}>
          <h1 style={styles.h1}>Our Services Include:</h1>
          <div style={styles.ul}>
            <div style={styles.li}>
              <img width={'90%'} src={tutorial}/>
              Tutorials
            </div>
            <div style={styles.li}>
              <img width={'90%'} src={assign}/>
              Assignments
            </div>
            <div style={styles.li}>
              <img width={'90%'} src={research}/>
              Academic research work <br /> (term papers, project, thesis)
            </div>
            <div style={styles.li}>
              <img width={'90%'} src={graduate}/>
              Virtual graduate assistant
            </div>
          </div>
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

  ul: {
    display: 'flex',
    flexWrap: 'wrap' as any,
    width: '100%',
    flexDirection: 'row' as any,
    aligItems: 'center' as any,
    justifCcontent: 'space-between',
  },

  li: {
    listStyle: 'none',
    width: '15rem',
    height: '15rem',
    margin: 'auto',
    // backgroundColor: '#eee',
    display: 'flex',
    color: '#eee',
    justifyContent: 'space-around',
    flexDirection: 'column' as any,
    alignItems: 'center'
  }
}

export default Services