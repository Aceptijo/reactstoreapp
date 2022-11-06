import React, { FC, useContext } from 'react';
import styles from './BasketItem.module.scss';
import Amount from '../Amount/Amount';
import { ICard } from '../../types/types';
import { Context } from '../../pages/Basket/Context';

interface BasketItemProps {
   item: ICard;
   index: number;
   arr: string[];
}

const BasketItem: FC<BasketItemProps> = ({ item, index, arr }) => {
   const { quantity } = useContext(Context);

   return (
      <div className={styles.item} style={index === arr.length - 1 ? { border: 'none' } : {}}>
         <div className={styles.avatar}>
            <img className={styles.image} src={item.avatar} alt="Basket item" />
         </div>
         <div className={styles.description}>
            <span className={styles.name}>{(item.name + item.description).toUpperCase()}</span>
            <div className={styles.price}>
               <span className={styles.number}>{`${+(item.price * quantity).toFixed(1)} BYN`}</span>
               <Amount key={item.id} />
            </div>
            <span className={styles.weight}>{`${+(item.weight * quantity).toFixed(1)} кг`}</span>
         </div>
      </div>
   );
};

export default BasketItem;
