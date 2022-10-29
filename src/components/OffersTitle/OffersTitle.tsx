import React from 'react';
import { ReactComponent as MoreIcon } from '../Offers/moreIcon.svg';
import styles from './OffersTitle.module.scss';

const OffersTitle = () => {
   return (
      <div className={styles.container}>
         <span className={styles.title}>Акции недели</span>
         <span className={styles.more}>Смотреть ещё</span>
         <MoreIcon className={styles.icon} />
      </div>
   );
};

export default OffersTitle;
