import React, { FC } from 'react';
import styles from './Offers.module.scss';
import Cards from '../Cards/Cards';
import Title from '../Title/Title';

const Offers: FC = () => {
   return (
      <section className={styles.container}>
         <Title title={'Акции недели'} />
         <Cards id={'offers'} />
      </section>
   );
};

export default Offers;
