import React from 'react';
import './Home.module.scss';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import Favourites from '../../components/Favourites/Favourites';
import Basket from '../../components/Basket/Basket';
import styles from './Home.module.scss';

const HomePage = () => {
   return (
      <div className={styles.home}>
         <Logo />
         <Search />
         <Favourites />
         <Basket />
      </div>
   );
};

export default HomePage;
