import React, { FC } from 'react';
import Title from '../Title/Title';
import styles from './Novelties.module.scss';
import Cards from '../Cards/Cards';

const Novelties: FC = () => {
   return (
      <section className={styles.container}>
         <Title title={'Новинки'} />
         <Cards id={'novelties'} />
      </section>
   );
};

export default Novelties;
