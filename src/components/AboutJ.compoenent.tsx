import {ReactElement, useEffect} from "react";

const AboutJ = ():ReactElement => {

    useEffect(() => {
      window.scroll(0,0)
    },[])
    

    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <h1 style={styles.h1}>ABOUT JUPEB</h1>
                <div style={{padding: '10px'}}>
                    <p>
                        The Joint Universities Preliminary Examination Board 
                        (JUPEB) programme is reputed to be quite tough, 
                        competitive and fast-paced for candidates seeking 
                        admission into Nigerian and foreign universities 
                        through Direct Entry. 
                    </p>
                    <p>
                        JUPEB is a national examinations body approved by  
                        the Federal Government of Nigeria in December 2013.  
                        It was formally established in April 2014 by a       
                        consortium of ten (10) partnering universities       
                        led by the University of Lagos.   
                    </p>
                    <p>
                        The board has the responsibility of                  
                        conducting common and standard examinations          
                        for the candidates, who have been exposed to a       
                        minimum of one-year approved courses in the different
                        Universities's Foundation and/or Diploma Programmes  
                        and are seeking Direct Entry admissions into         
                        University courses                                   
                        at the 200 Level in Nigerian and partnering          
                        foreign universities.   
                    </p>
                    <p>
                        The first of such examinations was conducted in
                        August 2014 and successful                     
                        candidates were admitted into 200 Level by     
                        JAMB based on                                  
                        recommendations from the universities.         
                        With effect from 2015, JUPEB Examinations will 
                        hold in June annually.                         
                        
                        Source Jupeb Official Site.
                        <a style={styles.link} href="https://jupeb.edu.ng/about_us/about_jupeb">https://jupeb.edu.ng/about_us/about_jupeb</a>
                    </p>
                </div>
            </div>

            <div style={styles.row}>
                <h1 style={styles.h1}>ADMISSION REQUIRMENTS</h1>
                <p>
                    To obtain JUPEB registration form,                                       
                    candidates are expected to possess at least                              
                    five credit passes in their O/level results.                             
                    Applicants without credit pass in either English                         
                    language and Mathematics can also apply.                                 
                    However, they are expected to register for the                           
                    either of the two.                                                       
                    
                    Applicants with AWAITING RESULTS can also apply                          
                    but their O’level result must be available before                        
                    University admission as it will be required by their                     
                    preferred university.
                </p>
            </div>
            <div style={styles.row}>
                <h1 style={styles.h1}>JUPEB CUT OFF MARKS</h1>
                <p>
                    <li style={styles.li}>
                        1. JUPEB cut off marks points for any science,
                        paramedical, administrative course is 6 points and above
                    </li>
                    <li style={styles.li}>
                        2. For Medicine, students must have at least 12 points and
                        above to gain admission to study Medicine in Nigerian universities
                        that offer the course with JUPEB ( examination will still be
                        conducted for Medicine students after meeting the required point with JUPEB)               
                        (OAU requires nothing less than 13 points)
                    </li>
                    <li style={styles.li}>
                        3. The JUPEB cut off marks for Engineering courses,
                        A/level Mathematics, Physics {'&'} Chemistry
                        for Industrial Chemistry is 8 points and above
                    </li>
                    <li style={styles.li}>
                        4. JUPEB cut off marks for Social Sciences/Administrative
                        Courses is a minimum 7 points and above.
                    </li>
                    <li style={styles.li}>
                        5. Candidates must have at least 5 points for Religious
                        Studies, Languages, and most of the Courses in Arts Faculty
                        and Agriculture.
                    </li>
                    <li style={styles.li}>
                        6. The cut-off marks for Law in JUPEB is 13 points,
                        candidates must have a minimum of 13 points to be able
                        to gain admission with JUPEB into 200 level to study
                        Law in those universities that offer the course and
                        that accept JUPEB.
                    </li>
                    Source: <a style={styles.link} href='https://myschoolgist.net'>https://myschoolgist.net</a>
                </p>
            </div>
            <div style={styles.row}>
                <h1 style={styles.h1}>AFFILIATE UNIVERSITIES</h1>
                <p>
                    <li>
                        Abia State University, Abia State. 
                    </li>
                    <li>
                        Alex Ekwueme University, Ndufu-Alike, Ikwo, Ebonyi State.                       
                    </li>
                    <li>
                        Caritas Universtiy, Enugu State. 
                    </li>
                    <li>
                        Chukwuemeka Odumegwu Ojukwu University, Uli, Anambra State. 
                        Clifford University Owerrinta, Aba, Abia State. 
                    </li>
                    <li>
                        Eastern Palm University, Ogboko, Imo State.                                 
                    </li>
                    <li>
                        Ebonyi State University, Ebonyi State. 
                    </li>
                    <li>
                        Enugu State University of Science and Technology, Enugu State.                          
                    </li>
                    <li>
                        Evangel University, Akaeze, Ebonyi State. 
                    </li>
                    <li>
                        Federal University of Technology, Owerri, Imo State.                                    
                    </li>
                    <li>
                        Godfrey Okoye University, Enugu State. 
                    </li>
                    <li>
                        Imo State University, Owerri, Imo State. 
                    </li>
                    <li>
                        Nnamdi Azikiwe University, Awka, Anambra State. 
                    </li>
                    <li>
                        Paul University, Awka, Anambra State. 
                    </li>
                    <li>
                        Renaissance University, Ugbawka, Enugu State. 
                    </li>
                    <li>
                        University of Nigeria, Nsukka, Enugu State.
                    </li>
                    <li>
                        Babcock University, Ilishan, Ogun State.
                    </li>
                    <li>
                        Federal University of Agriculture, Abeokuta, Ogun State.
                    </li>
                    <li>
                        Federal University of Technology, Akure.
                    </li>
                    <li>
                        Federal University, Oye-Ekiti, Ekiti State.
                    </li>
                    <li>
                        Obafemi Awolowo University, Ile-Ife, Osun State.
                    </li>
                    <li>
                        Redeemers University, Ede, Osun State.
                    </li>
                    <li>
                        University of Lagos, Akoka, Lagos State.
                    </li>
                    And a lot more...
                </p>
            </div>
        </div>
    ) 
}

export default AboutJ

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
        margin: 'auto 2rem',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column' as any,
        alignItems: 'center' as any,
        justifyContent: 'center',
    },

    h1: {
        textAlign: 'center' as any,
        textDecoration: 'underline'
    },

    link: {
        color: '#90caf9',
    },

    li: {
        listStyleType: 'none'
    }
}