import React, { FC } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface CardsProps {
   id: string;
}

const Cards: FC<CardsProps> = ({ id }) => {
   const cards = useTypedSelector((state) => state.card.cards);

   return (
      <div className={styles.cards}>
         {id === 'offers'
            ? cards
                 .map((card) => <Card card={card} key={card.id} />)
                 .filter((_, index) => index < 3)
            : cards
                 .map((card) => <Card card={card} key={card.id} />)
                 .filter((_, index) => index > 2)}
      </div>
   );
};

export default Cards;
