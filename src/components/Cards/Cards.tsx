import React, { FC } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';
import { useSelector } from 'react-redux';
import { ICards } from '../../types/types';

interface CardsProps {
   id: string;
}

const Cards: FC<CardsProps> = ({ id }) => {
   const cards = useSelector<ICards>((state) => state.cards);

   return (
      <div className={styles.cards}>
         {/*{id === 'offers'*/}
         {/*   ? cards*/}
         {/*        .map((card) => <Card card={card} key={card.id} />)*/}
         {/*        .filter((_, index) => index < 3)*/}
         {/*   : cards*/}
         {/*        .map((card) => <Card card={card} key={card.id} />)*/}
         {/*        .filter((_, index) => index > 2)}*/}
      </div>
   );
};

export default Cards;
