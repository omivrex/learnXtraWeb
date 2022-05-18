import {ReactElement, useEffect} from "react";
import rProg from "../assets/rProg.jpg";
import news from "../assets/news.jpg";
import pq from "../assets/pq.jpg";
import startPrac from "../assets/startPrac.jpg";

const OApps = ():ReactElement => {
  useEffect(() => {
    window.scroll(0,0)
  },[])

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <h1 style={styles.h1}>Our Inspiration</h1>
        <p >
          No doubt, it is the desire of every student preparing to 
          write the annual JUPEB A-level Examination to be successful therein,
          in order to achieve their dream of higher education. Therefore, it
          is necessary that the candidate be adequately equipped to face the battle ahead.
          The JUPEB Study App has been carefully and specially 
          prepared to meet the needs of both students and tutors preparing 
          for the 'almighty' JUPEB exams. It covers a variety of recurring
          A-level exam topics in Mathematics, Physics, Chemistry and Biology. 
          This JUPEB solution set is packed with comprehensive and 
          accurate solutions to past questions since the inception of the exam 
          in 2018. It gives a detailed explanation of answers to questions in
          the multiple choice (OBJ) section, as well as the theory section. 
          Each answer is presented in a bcool typeset font so as to give the
          student a clearer understanding.
          In addition, graphical illustrations, diagrammatical 
          representations,  statistical tables, fundamental differential and integral tables, 
          including trigonometric and logarithm tables have been provided, for maximum revision,
          concentration and assimilation.
          In fact, this study app will give a rich taste of 
          intellectual sagacity to the JUPEB candidate, because it was prepared 
          by a team of seasoned and experienced tutors who, using their prized
          knowledge, have helped many students gain admission into Nigerian higher 
          institutions. No doubt, you could be the next!
          Remember, with dedication, hard work, being at the 
          right place and doing the right thing at the right time,
          success will be yours for the taking.
          Good luck in your exams!
        </p> 
      </div>

      <div style={{...styles.row, ...{height: 'fit-content'}}}>
        <h1 style={styles.h1}>Guide Lines</h1>
        <div>
          <p>
            <span style={styles.guideHeader}>PAST QUESTIONS</span>
            <div style={styles.content}>
              <img style={styles.sampleImg} src={pq} alt="image of pastquestion section" />
              This application contains past question on
              MTH, PHY, CHM and BIO. And just a click to view the 
              corresponding detailed solution. 
              <br />
              Each course was splitted into four sections.
              (001-004) as to enable our user learn in a 
              better arrangement.
              Note: only our paid users can gain complete 
              access to the four courses.
            </div>
          </p>
          <p>
            <span style={styles.guideHeader}>NEWS {'&'} RESOURCES</span>
            <div style={styles.content}>
              <img style={styles.sampleImg} src={news} alt="image of news and resources section" />
              We keep you updated with recent 
              happening concerning the program. 
              <br />
              We update you with recommended 
              study materials and cut off marks 
              for different Universities.                        
            </div>
          </p>
          <p>
            <span style={styles.guideHeader}>START PRACTICE</span>
            <div style={styles.content}>
              <img style={styles.sampleImg} src={startPrac} alt="image of start practice section" />
              You can take a test to know how you progress                
              after your study with the past questions                    
              section.                    
              <br />
              This test can either be timed or not,                       
              by default the timer is off you can turn this                  
              timer on by clicking on the timmer button.                  
              Also the time is set to 1 hour by default but                   
              you can select other options by clicking the                    
              select time button.                                 
              <br />
              On submittion your test in marked and                      
              your score is shown. This progress is then                          
              logged to the rate progress section.                                             
            </div>
          </p>
          <p>
            <span style={styles.guideHeader}>RATE PROGRESS</span>
            <div style={styles.content}>
              <img style={styles.sampleImg} src={rProg} alt="image of rate progress section" />
              Your progress is calculated using the scores                                        
              and time spent from each test.                                      
              <br />
              Your course strength is the total score                                         
              obtained from all tests taken so far.                                        
              <br />
              Average Time Taken is the time                                       
              taken for you to complete all tests taken                                        
              in that subject so far.                                     
              <br />
              Average Time spent is the                                       
              time spent per question, that is the time                                        
              you spend answering each question.                                     
              This is important to enhance your speed                                         
              in answering questions and finishing your                                       
              main exams on time.                                      
              <br />
              Each log can be reset by                                       
              clicking on the reset button below each                                         
              course section.                                         
              <br />
              After you take a new test click the                                         
              refresh button to see your new progress.                                                               
            </div>
          </p>
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
    width: '100%',
    display: 'flex',
    backgroundColor: '#531d5c',
    position: 'relative'as any,
    height: 'fit-content',
    color: '#eee',
    alignItems: 'center',
    flexDirection: 'column' as any,
  },
  
  row: {
    fontSize: '1em',
    fontFamily: 'Roboto, sans-serif, san Francisco',
    margin: '3rem auto 0rem auto',
    width: '90%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'center' as any,
    padding: '10rem 0px',
    justifyContent: 'center',
  },

  h1: {
    textAlign: 'center' as any,
    textDecoration: 'underline'
  },

  guideHeader: {
    display: 'block',
    textAlign: 'center' as any,
    textDecoration: 'underline',
  },

  content: {
    display: 'flex',
    flexWrap: 'wrap' as any,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '77%',
    margin: '2rem auto',
  },

  sampleImg: {
    width: '10rem',
    margin: '0.5rem auto'
  }

}