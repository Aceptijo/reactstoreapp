import React, { FC } from 'react';
import { ReactComponent as MoreIcon } from '../Offers/moreIcon.svg';
import styles from './OffersTitle.module.scss';

interface OffersTitleProps {
   title: string;
}

const OffersTitle: FC<OffersTitleProps> = ({ title }) => {
   return (
      <div className={styles.container}>
         <span className={styles.title}>{title}</span>
         <span className={styles.more}>Смотреть ещё</span>
         <MoreIcon className={styles.icon} />
      </div>
   );
};

export default OffersTitle;
