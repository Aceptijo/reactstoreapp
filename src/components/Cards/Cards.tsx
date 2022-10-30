import React, { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';
import axios from 'axios';
import { ICard } from '../../types/types';

interface CardsProps {
   id: string;
}

const Cards: FC<CardsProps> = ({ id }) => {
   const [cards, setCards] = useState<ICard[]>([]);

   useEffect(() => {
      fetchCards().then((r) => r);
   }, []);

   const fetchCards = async () => {
      const response = await axios.get<ICard[]>(
         'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/cards'
      );
      setCards(response.data);
   };

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
