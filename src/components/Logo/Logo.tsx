import React from 'react';
import { ReactComponent as LogoIcon } from './logoIcon.svg';
import styles from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';

const Logo = () => {
   return (
      <div className={styles.logo}>
         <LogoIcon />
         <LogoText />
      </div>
   );
};

export default Logo;
