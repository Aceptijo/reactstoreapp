import React, { FC } from 'react';
import styles from './Card.module.scss';
import { ICard } from '../../types/types';
import { ReactComponent as LikeIcon } from './likeIcon.svg';
import Price from '../Price/Price';
import Button from '../Button/Button';

interface CardProps {
   card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
   return (
      <div className={styles.card}>
         <div className={styles.content}>
            <img className={styles.image} src={card.avatar} alt="product image" />
            <LikeIcon className={styles.like} />
            <span className={styles.name}>{card.name}</span>
            <span className={styles.description}>{card.description}</span>
            <Price card={card} />
            <Button />
         </div>
      </div>
   );
};

export default Card;
