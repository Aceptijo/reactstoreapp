import React, { FC } from 'react';
import styles from './Button.module.scss';
import { BasketActionTypes } from '../../store/action-creators/basket';
import { useDispatch } from 'react-redux';
import { ICard } from '../../types/types';

interface ButtonProps {
   children?: React.ReactNode;
   value?: string;
   card?: ICard;
}

const Button: FC<ButtonProps> = ({ children, card, value }) => {
   const dispatch = useDispatch();

   const addToBasket = () => {
      dispatch({ type: BasketActionTypes.ADD_ITEM, payload: card });
   };

   return (
      <button onClick={() => addToBasket()} className={styles.btn} style={{ width: value }}>
         <span className={styles.text}>{children}</span>
      </button>
   );
};

export default Button;
