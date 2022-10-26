import React from 'react';
import styles from './Catalog.module.scss';
import { ReactComponent as SmallIcon } from './petsSmallIcon.svg';
import { ReactComponent as GreatIcon } from './petsGreatIcon.svg';
import { ReactComponent as BurgerIcon } from './burgerIcon.svg';

const Catalog = () => {
   return (
      <button className={styles.catalog}>
         <BurgerIcon />
         <span>Каталог</span>
         <SmallIcon />
         <GreatIcon />
      </button>
   );
};

export default Catalog;
