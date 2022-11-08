import React from 'react';
import './Navigation.module.scss';
import { Link } from 'react-router-dom';
import Geolocation from '../Geolocation/Geolocation';
import Account from '../Account/Account';
import styles from './Navigation.module.scss';

const Navigation = () => {
   return (
      <header className={styles.header}>
         <nav>
            <Geolocation />
            <Link to="/">Домой</Link>
            <Link to="/stores">Магазины</Link>
            <Link to="/delivery">Доставка</Link>
            <Link to="/payment">Оплата</Link>
            <Link to="/contacts">Контакты</Link>
            <a className={styles.phone} href="tel:+375333238994">
               +375 (33) 323-89-94
            </a>
            <Account />
         </nav>
      </header>
   );
};

export default Navigation;
