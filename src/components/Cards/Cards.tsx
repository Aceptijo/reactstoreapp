import React, { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';
import axios from 'axios';
import { ICard } from '../../types/types';

const Cards: FC = () => {
   const [cards, setCards] = useState<ICard[]>([]);

   useEffect(() => {
      fetchCards();
   }, []);

   const fetchCards = async () => {
      const response = await axios.get<ICard[]>(
         'https://635cf9ddfc2595be264ffcad.mockapi.io/api/card/cards'
      );
      setCards(response.data);
   };

   return (
      <div className={styles.cards}>
         {cards.map((card) => (
            <Card card={card} key={card.id} />
         ))}
      </div>
   );
};

export default Cards;
