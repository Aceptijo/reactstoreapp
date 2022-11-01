import React, { FC } from 'react';
import styles from './Offers.module.scss';
import Cards from '../Cards/Cards';
import OffersTitle from '../OffersTitle/OffersTitle';

const Offers: FC = () => {
   return (
      <section className={styles.container}>
         <OffersTitle title={'Акции недели'} />
         <Cards id={'offers'} />
      </section>
   );
};

export default Offers;
