import React from 'react';
import styles from './FavouriteTItle.module.scss';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { favouriteSlice } from '../../../../store/reducers/favouriteSlice';

const FavouriteTitle = () => {
   const dispatch = useAppDispatch();

   const removeAll = () => {
      dispatch(favouriteSlice.actions.removeAllItems());
   };

   return (
      <div className={styles.container}>
         <span className={styles.title}>Избранное</span>
         <span onClick={removeAll} className={styles.delete}>
            Удалить всё
         </span>
      </div>
   );
};

export default FavouriteTitle;
