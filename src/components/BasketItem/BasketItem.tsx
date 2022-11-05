import React, { FC } from 'react';
import styles from './BasketItem.module.scss';
import Amount from '../Amount/Amount';
import { ICard } from '../../types/types';
import { useAppSelector } from '../../hooks/useAppSelector';

interface BasketItemProps {
   item: ICard;
   index: number;
   arr: string[];
}

const BasketItem: FC<BasketItemProps> = ({ item, index, arr }) => {
   const cash = useAppSelector((state) => state.cash.cash);

   return (
      <div className={styles.item} style={index === arr.length - 1 ? { border: 'none' } : {}}>
         <div className={styles.avatar}>
            <img className={styles.image} src={item.avatar} alt="Basket item image" />
         </div>
         <div className={styles.description}>
            <span className={styles.name}>{(item.name + item.description).toUpperCase()}</span>
            <div className={styles.price}>
               <span className={styles.number}>{`${+(item.price * cash).toFixed(1)} BYN`}</span>
               <Amount key={item.id} />
            </div>
            <span className={styles.weight}>{`${+(item.weight * cash).toFixed(1)} кг`}</span>
         </div>
      </div>
   );
};

export default BasketItem;
