import React from 'react';
import styles from './Amount.module.scss';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CashActionTypes } from '../../store/action-creators/cash';

const Amount = () => {
   const dispatch = useDispatch();
   const cash = useTypedSelector((state) => state.cash.cash);

   const addOne = () => {
      dispatch({ type: CashActionTypes.INCREMENT, payload: 1 });
   };

   const removeOne = () => {
      dispatch({ type: CashActionTypes.DECREMENT, payload: 1 });
   };

   const changeValue = (event: any) => {
      dispatch({ type: CashActionTypes.CHANGE, payload: event.target.value });
   };

   return (
      <div className={styles.container}>
         <div onClick={removeOne} className={styles.minus}>
            -
         </div>
         <input
            className={styles.counter}
            type="text"
            value={cash}
            onChange={(event) => changeValue(event)}
         />
         <div onClick={addOne} className={styles.plus}>
            +
         </div>
      </div>
   );
};

export default Amount;
