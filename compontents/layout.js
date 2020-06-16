import Head from 'next/head';
import Navbar from './navbar';
import styles from './layout.module.css';

const Layout = (props) => (
    <div>
        <Head>
            <title>My Website</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className={styles.containers}>
        {props.children}
        </div>
        
    </div>
);

export default Layout;