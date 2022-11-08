import React, { FC } from 'react';
import styles from './BasketItem.module.scss';
import Amount from '../Amount/Amount';
import { ICard } from '../../../../types/types';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { basketSlice } from '../../../../store/reducers/basketSlice';

interface BasketItemProps {
   item: ICard;
   index: number;
   arr: string[];
}

const BasketItem: FC<BasketItemProps> = ({ item, index, arr }) => {
   const dispatch = useAppDispatch();

   const setCount = (id: number, count: number) => {
      dispatch(
         basketSlice.actions.changeCount({
            id,
            count,
         })
      );
   };

   return (
      <div
         className={styles.item}
         style={index === arr.length - 1 ? { border: 'none' } : {}}
      >
         <div className={styles.avatar}>
            <img className={styles.image} src={item.avatar} alt="Basket item" />
         </div>
         <div className={styles.description}>
            <span className={styles.name}>
               {(item.name + item.description).toUpperCase()}
            </span>
            <div className={styles.price}>
               <span className={styles.number}>{`${+(
                  item.price * item.count!
               ).toFixed(1)} BYN`}</span>
               <Amount
                  key={item.id}
                  quantity={item.count!}
                  setQuantity={(e) => setCount(item.id, e)}
               />
            </div>
            <span className={styles.weight}>{`${+(
               item.weight * item.count!
            ).toFixed(1)} кг`}</span>
         </div>
      </div>
   );
};

export default BasketItem;
