import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';

const Footer = () => {
   return (
      <footer className={styles.container}>
         <div className={styles.line}>
            <Logo color={'white'} />
            <div className={styles.catalog}></div>
            <div className={styles.company}></div>
            <div className={styles.contacts}></div>
         </div>
      </footer>
   );
};

export default Footer;
