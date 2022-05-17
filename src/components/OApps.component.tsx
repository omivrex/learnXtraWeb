import {ReactElement, useEffect} from "react";

const OApps = ():ReactElement => {
  useEffect(() => {
    window.scroll(0,0)
  },[])

  return (
    <div style={styles.container}>
      <p>
        No doubt, it is the desire of every student preparing to 
        write the annual JUPEB A-level Examination to be successful therein,
        in order to achieve their dream of higher education. Therefore, it
        is necessary that the candidate be adequately equipped to face the battle ahead.

      </p> 
      <p>
        The JUPEB Study App has been carefully and specially 
        prepared to meet the needs of both students and tutors preparing 
        for the 'almighty' JUPEB exams. It covers a variety of recurring
        A-level exam topics in Mathematics, Physics, Chemistry and Biology. 
      </p> 
      <p>
        This JUPEB solution set is packed with comprehensive and 
        accurate solutions to past questions since the inception of the exam 
        in 2018. It gives a detailed explanation of answers to questions in
        the multiple choice (OBJ) section, as well as the theory section. 
        Each answer is presented in a bcool typeset font so as to give the
        student a clearer understanding.
      </p>  

      <p>
        In addition, graphical illustrations, diagrammatical 
        representations,  statistical tables, fundamental differential and integral tables, 
        including trigonometric and logarithm tables have been provided, for maximum revision,
        concentration and assimilation.
      </p> 
      <p>
        In fact, this study app will give a rich taste of 
        intellectual sagacity to the JUPEB candidate, because it was prepared 
        by a team of seasoned and experienced tutors who, using their prized
        knowledge, have helped many students gain admission into Nigerian higher 
        institutions. No doubt, you could be the next!
      </p> 

      <p>
        Remember, with dedication, hard work, being at the 
        right place and doing the right thing at the right time,
        success will be yours for the taking.
        Good luck in your exams!
      </p>
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
    // backgroundColor: '#531d5c',
    position: 'relative'as any,
    height: 'fit-content',
    alignItems: 'center',
    flexDirection: 'column' as any,
  },
}