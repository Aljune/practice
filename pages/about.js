import Layout from '../compontents/layout';
import styles from '../compontents/layout.module.css';

const About = () => (
    <Layout>
        
       
        <div className="text-center ">
        <img
              src="../profile.jpg"
              className={`${styles.headerHomeImage} ${styles.borderCircle} `} 
        />
        <h2 className="py-2"><strong>ALJUNE DEGAMO</strong></h2> 
        <h6 className="">Name</h6>
        </div>
        
    </Layout>
);
export default About;