import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
   children?: React.ReactNode;
   value?: string;
}

const Button: FC<ButtonProps> = ({ children, value }) => {
   return (
      <button className={styles.btn} style={{ width: value }}>
         <span className={styles.text}>{children}</span>
      </button>
   );
};

export default Button;
