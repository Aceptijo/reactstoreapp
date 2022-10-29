import React from 'react';
import styles from './Socials.module.scss';
import { ReactComponent as InstagramIcon } from './instagramIcon.svg';
import { ReactComponent as FacebookIcon } from './linkedinIcon.svg';
const Socials = () => {
   return (
      <nav className={styles.container}>
         <a href={'https://instagram.com/heiltoh'} className={styles.instagram}>
            <InstagramIcon className={styles.instIcon} />
         </a>
         <a href={'https://www.linkedin.com/in/anton-lipka-80a706214/'} className={styles.linkedin}>
            <FacebookIcon className={styles.linkIcon} />
         </a>
      </nav>
   );
};

export default Socials;
