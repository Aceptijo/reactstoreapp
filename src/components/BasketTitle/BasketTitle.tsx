import React from 'react';
import styles from './BasketTitle.module.scss';
import { useDispatch } from 'react-redux';
import { BasketActionTypes } from '../../store/action-creators/basket';

const BasketTitle = () => {
   const dispatch = useDispatch();

   const removeAllItems = () => {
      dispatch({ type: BasketActionTypes.REMOVE_ITEMS });
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
