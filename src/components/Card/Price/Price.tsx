import React, { FC } from 'react';
import { ICard } from '../../../types/types';
import styles from './Price.module.scss';

interface PriceProps {
   card: ICard;
}

const Price: FC<PriceProps> = ({ card }) => {
   return card.oldPrice ? (
      <div className={styles.container}>
         <span className={styles.price}>{card.price + ' BYN'}</span>
         <span className={styles.old}>{card.oldPrice + ' BYN'}</span>
      </div>
   ) : (
      <div className={styles.container}>
         <span className={styles.price}>{card.price + ' BYN'}</span>
      </div>
   );
};

export default Price;
