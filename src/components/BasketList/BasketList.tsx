import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import styles from './BasketList.module.scss';

const BasketList = () => {
   return (
      <div className={styles.container}>
         <BasketItem />
      </div>
   );
};

export default BasketList;
