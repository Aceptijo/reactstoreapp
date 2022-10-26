import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Favourites from '../Favourites/Favourites';
import Basket from '../Basket/Basket';
import styles from './LogoSection.module.scss';

const LogoSection = () => {
   return (
      <section className={styles.section}>
         <Logo />
         <Search />
         <Favourites />
         <Basket />
      </section>
   );
};

export default LogoSection;
