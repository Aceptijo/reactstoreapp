import React from 'react';
import { ReactComponent as BasketIcon } from './basketIcon.svg';
import './Basket.module.scss';
import { useNavigate } from 'react-router-dom';
import styles from './Basket.module.scss';

const Basket = () => {
   const navigation = useNavigate();

   return (
      <div onClick={() => navigation('/basket')} className={styles.basket}>
         <BasketIcon className={styles.icon} />
         <span>Корзина</span>
      </div>
   );
};

export default Basket;
