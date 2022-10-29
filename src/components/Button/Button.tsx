import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
   return (
      <button className={styles.btn}>
         <span className={styles.text}>В корзину</span>
      </button>
   );
};

export default Button;
