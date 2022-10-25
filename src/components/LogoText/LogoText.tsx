import React from 'react';
import styles from './Logotext.module.scss';

const LogoText = () => {
   return (
      <div className={styles.text}>
         <span className={styles.top}>Котопузик</span>
         <span className={styles.bottom}>Интернет-магазин зоотоваров</span>
      </div>
   );
};

export default LogoText;
