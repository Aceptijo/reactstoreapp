import React, { useContext } from 'react';
import styles from './Amount.module.scss';
import { ReactComponent as PlusIcon } from './plusIcon.svg';
import { ReactComponent as MinusIcon } from './minusIcon.svg';
import { Context } from '../../pages/Basket/Context';

const Amount = () => {
   const { quantity, setQuantity } = useContext(Context);

   const addOne = () => {
      setQuantity(quantity + 1);
   };

   const removeOne = () => {
      setQuantity(quantity - 1);
   };

   const changeValue = (event: any) => {
      setQuantity(event.target.value);
   };

   return (
      <div className={styles.container}>
         <div onClick={removeOne} className={styles.minus}>
            <MinusIcon />
         </div>
         <input
            className={styles.counter}
            type="text"
            value={quantity}
            onChange={(event) => changeValue(event)}
         />
         <div onClick={addOne} className={styles.plus}>
            <PlusIcon />
         </div>
      </div>
   );
};

export default Amount;
