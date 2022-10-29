import React from 'react';
import styles from './Offers.module.scss';
import Cards from '../Cards/Cards';
import OffersTitle from '../OffersTitle/OffersTitle';

const Offers = () => {
   return (
      <section className={styles.container}>
         <OffersTitle />
         <Cards />
      </section>
   );
};

export default Offers;
