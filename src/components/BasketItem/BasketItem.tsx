import React from 'react';
import styles from './BasketItem.module.scss';

const BasketItem = () => {
   return (
      <div className={styles.container}>
         <div className={styles.avatar}>
            <span>test</span>
         </div>
         <div className={styles.description}>
            <span className={styles.name}>asd</span>
            <span className={styles.price}>asd</span>
            <span className={styles.weight}>asd</span>
         </div>
      </div>
   );
};

export default BasketItem;
