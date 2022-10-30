import React from 'react';
import styles from './More.module.scss';
import { ReactComponent as MoreIcon } from '../Offers/moreIcon.svg';

const More = () => {
   return (
      <div className={styles.container}>
         <span className={styles.text}>Читать</span>
         <MoreIcon className={styles.icon} />
      </div>
   );
};

export default More;
