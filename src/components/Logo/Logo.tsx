import React, { FC } from 'react';
import { ReactComponent as LogoIcon } from './logoIcon.svg';
import styles from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';

interface LogoProps {
   color: string;
}

const Logo: FC<LogoProps> = ({ color }) => {
   return (
      <div className={styles.logo}>
         <LogoIcon style={{ fill: color }} />
         <LogoText color={color} />
      </div>
   );
};

export default Logo;
