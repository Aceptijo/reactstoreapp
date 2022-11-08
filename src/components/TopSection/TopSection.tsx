import React from 'react';
import Logo from './Logo/Logo';
import Search from '../Search/Search';
import Favourites from './Favourites/Favourites';
import Basket from './Basket/Basket';
import styles from './TopSection.module.scss';

const TopSection = () => {
   return (
      <section className={styles.section}>
         <Logo color={'#E74645'} />
         <Search />
         <Favourites />
         <Basket />
      </section>
   );
};

export default TopSection;
