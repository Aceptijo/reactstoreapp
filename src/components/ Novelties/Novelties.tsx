import React from 'react';
import OffersTitle from '../OffersTitle/OffersTitle';
import styles from './Novelties.module.scss';
import Cards from '../Cards/Cards';

const Novelties = () => {
   return (
      <section className={styles.container}>
         <OffersTitle title={'Новинки'} />
         <Cards id={'novelties'} />
      </section>
   );
};

export default Novelties;
