import React, { FC } from 'react';
import styles from './Logotext.module.scss';

interface LogoTextProps {
   color: string;
}

const LogoText: FC<LogoTextProps> = ({ color }) => {
   return (
      <div className={styles.text}>
         <span className={styles.top} style={{ color: color }}>
            Котопузик
         </span>
         <span className={styles.bottom} style={{ color: color }}>
            Интернет-магазин зоотоваров
         </span>
      </div>
   );
};

export default LogoText;
