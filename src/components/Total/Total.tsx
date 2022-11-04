import React from 'react';
import Button from '../Button/Button';
import styles from './Total.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Total = () => {
   const basket = useTypedSelector((state) => state.basket.items);
   const cash = useTypedSelector((state) => state.cash.cash);

   const priceAmount = basket.reduce((acc, item) => acc + item.price, 0);
   const weightAmount = basket.reduce((acc, item) => acc + item.weight, 0);

   return (
      <div className={styles.container}>
         <div className={styles.title}>
            <span>Ваш заказ</span>
         </div>
         <div className={styles.counter}>
            <span>{'Кол-во товаров - ' + basket.length}</span>
            <span>{`${+(priceAmount * cash).toFixed(1)} BYN`}</span>
         </div>
         <div className={styles.weight}>
            <span>Общий вес</span>
            <span>{`${+(weightAmount * cash).toFixed(1)} кг`}</span>
         </div>
         <div className={styles.delivery}>
            <span>Способ доставки</span>
            <span>Бесплатный</span>
         </div>
         <div className={styles.total}>
            <span>Итого</span>
            <span>{`${+(priceAmount * cash).toFixed(1)} BYN`}</span>
         </div>
         <Button value={'100%'}>Оформить заказ</Button>
      </div>
   );
};

export default Total;
