import React from 'react';
import styles from './FavouriteList.module.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import Card from '../../../../components/Card/Card';
import { ReactComponent as EmptyIcon } from '../../../Basket/components/BasketList/emptyIcon.svg';

const FavouriteList = () => {
   const favourite = useAppSelector((state) => state.favourite.items);

   return (
      <div className={styles.list}>
         {favourite.length > 0 ? (
            favourite.map((item) => <Card key={item.id} card={item} />)
         ) : (
            <div className={styles.empty}>
               <EmptyIcon className={styles.icon} />
               <span className={styles.text}>
                  Вы не добавили товары в избранное :)
               </span>
            </div>
         )}
      </div>
   );
};

export default FavouriteList;
