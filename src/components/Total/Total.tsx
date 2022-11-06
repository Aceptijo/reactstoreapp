import React, { useContext } from 'react';
import Button from '../Button/Button';
import styles from './Total.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReactComponent as VisaIcon } from './visaIcon.svg';
import { ReactComponent as MasterCard } from './mastercardIcon.svg';
import { Context } from '../../pages/Basket/Context';

const Total = () => {
   const basket = useAppSelector((state) => state.basket.items);

   const { quantity } = useContext(Context);

   const priceAmount = basket.reduce((acc, item) => acc + item.price, 0);
   const weightAmount = basket.reduce((acc, item) => acc + item.weight, 0);

   return (
      <div className={styles.container}>
         <div className={styles.title}>
            <span>Ваш заказ</span>
         </div>
         <div className={styles.counter}>
            <span>{'Кол-во товаров - ' + basket.length}</span>
            <span>{`${+(priceAmount * quantity).toFixed(1)} BYN`}</span>
         </div>
         <div className={styles.weight}>
            <span>Общий вес</span>
            <span>{`${+(weightAmount * quantity).toFixed(1)} кг`}</span>
         </div>
         <div className={styles.delivery}>
            <span>Способ доставки</span>
            <span>Бесплатный</span>
         </div>
         <div className={styles.total}>
            <span>Итого</span>
            <span>{`${+(priceAmount * quantity).toFixed(1)} BYN`}</span>
         </div>
         <div className={styles.cards}>
            <VisaIcon />
            <MasterCard />
         </div>
         <Button children={'Оформить заказ'} width={'100%'} />
      </div>
   );
};

export default Total;
