import React, { FC } from 'react';
import OffersTitle from '../OffersTitle/OffersTitle';
import styles from './Novelties.module.scss';
import Cards from '../Cards/Cards';
import { ICard } from '../../types/types';

interface NoveltiesProps {
   cards: ICard[];
}

const Novelties: FC<NoveltiesProps> = ({ cards }) => {
   return (
      <section className={styles.container}>
         <OffersTitle title={'Новинки'} />
         <Cards id={'novelties'} />
      </section>
   );
};

export default Novelties;
