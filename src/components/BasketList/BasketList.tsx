import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import styles from './BasketList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const BasketList = () => {
   const basket = useTypedSelector((state) => state.basket.items);

   return (
      <div className={styles.container}>
         {basket.map((item) => (
            <BasketItem key={item.id} item={item} />
         ))}
      </div>
   );
};

export default BasketList;
