import React from 'react';
import styles from './Amount.module.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CashActionTypes } from '../../store/action-creators/cash';
import { ReactComponent as PlusIcon } from './plusIcon.svg';
import { ReactComponent as MinusIcon } from './minusIcon.svg';

const Amount = () => {
   const dispatch = useDispatch();
   const cash = useAppSelector((state) => state.cash.cash);

   const addOne = () => {
      dispatch({ type: CashActionTypes.INCREMENT, payload: 1 });
   };

   const removeOne = () => {
      dispatch({ type: CashActionTypes.DECREMENT, payload: 1 });
   };

   const changeValue = (event: any) => {
      dispatch({ type: CashActionTypes.CHANGE, payload: +event.target.value });
   };

   return (
      <div className={styles.container}>
         <div onClick={removeOne} className={styles.minus}>
            <MinusIcon />
         </div>
         <input
            className={styles.counter}
            type="text"
            value={cash}
            onChange={(event) => changeValue(event)}
         />
         <div onClick={addOne} className={styles.plus}>
            <PlusIcon />
         </div>
      </div>
   );
};

export default Amount;
