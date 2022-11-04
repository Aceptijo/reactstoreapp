import React, { FC } from 'react';
import styles from './BasketItem.module.scss';
import Amount from '../Amount/Amount';
import { ICard } from '../../types/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface BasketItemProps {
   item: ICard;
}

const BasketItem: FC<BasketItemProps> = ({ item }) => {
   const cash = useTypedSelector((state) => state.cash.cash);
   return (
      <div className={styles.container}>
         <div className={styles.avatar}>
            <img className={styles.image} src={item.avatar} alt="Basket item image" />
         </div>
         <div className={styles.description}>
            <span className={styles.name}>{item.name + item.description}</span>
            <div className={styles.price}>
               <span className={styles.number}>{`${+(item.price * cash).toFixed(1)} BYN`}</span>
               <Amount />
            </div>
            <span className={styles.weight}>{`${+(item.weight * cash).toFixed(1)} кг`}</span>
         </div>
      </div>
   );
};

export default BasketItem;
