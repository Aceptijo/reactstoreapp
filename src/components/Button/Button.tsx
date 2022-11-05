import React, { FC, useState } from 'react';
import styles from './Button.module.scss';
import { ICard } from '../../types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { basketSlice } from '../../store/reducers/basketSlice';

interface ButtonProps {
   children?: React.ReactNode;
   width?: string;
   card?: ICard;
   changed?: string;
}

const Button: FC<ButtonProps> = ({ changed, children, card, width }) => {
   const [title, setTitle] = useState(`${children}`);
   const [active, setActive] = useState(true);

   const dispatch = useAppDispatch();

   const addToBasket = () => {
      dispatch(basketSlice.actions.addItem(card));
      setTitle(`${changed || title}`);
      setActive(false);
   };

   return active ? (
      <button onClick={() => addToBasket()} className={styles.btn} style={{ width: width }}>
         <span className={styles.text}>{title}</span>
      </button>
   ) : (
      <button className={styles.disabled} style={{ width: width }}>
         <span className={styles.text}>{title}</span>
      </button>
   );
};

export default Button;
