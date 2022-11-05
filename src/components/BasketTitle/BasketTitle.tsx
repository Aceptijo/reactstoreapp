import React from 'react';
import styles from './BasketTitle.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { basketSlice } from '../../store/reducers/basketSlice';

const BasketTitle = () => {
   const dispatch = useAppDispatch();

   const removeAllItems = () => {
      dispatch(basketSlice.actions.removeItems());
   };

   return (
      <div className={styles.container}>
         <span className={styles.title}>Корзина</span>
         <span onClick={removeAllItems} className={styles.delete}>
            Удалить всё
         </span>
      </div>
   );
};

export default BasketTitle;
