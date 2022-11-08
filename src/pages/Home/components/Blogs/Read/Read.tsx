import React from 'react';
import styles from './Read.module.scss';
import { ReactComponent as MoreIcon } from '../../../../../components/Offers/moreIcon.svg';

const Read = () => {
   return (
      <div className={styles.container}>
         <span className={styles.text}>Читать</span>
         <MoreIcon className={styles.icon} />
      </div>
   );
};

export default Read;
