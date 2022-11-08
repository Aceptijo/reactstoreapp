import React, { useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import styles from './BasketList.module.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Button from '../../../../components/Button/Button';
import { ReactComponent as EmptyIcon } from './emptyIcon.svg';

const BasketList = () => {
   const [text, setText] = useState('');

   const basket = useAppSelector((state) => state.basket.items);

   return (
      <div className={styles.list}>
         {basket.map((item, index, arr) => (
            <BasketItem key={item.id} item={item} index={index} arr={arr} />
         ))}
         {basket.length > 0 ? (
            <form className={styles.promo}>
               <input
                  type="text"
                  placeholder={'Введите промокод'}
                  value={text}
                  onChange={(event) => setText(event.target.value)}
               />
               <Button children={'Применить'} width={'40%'} />
            </form>
         ) : (
            <div className={styles.empty}>
               <EmptyIcon className={styles.icon} />
               <span className={styles.text}>
                  Вы не добавили товары в корзину :)
               </span>
            </div>
         )}
      </div>
   );
};

export default BasketList;
