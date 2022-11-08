import React, { FC, useState } from 'react';
import styles from './Card.module.scss';
import { ICard } from '../../types/types';
import { ReactComponent as LikeIcon } from './likeIcon.svg';
import Price from './Price/Price';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { favouriteSlice } from '../../store/reducers/favouriteSlice';

interface CardProps {
   card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
   const [liked, setLiked] = useState(false);
   const dispatch = useAppDispatch();

   const like = () => {
      dispatch(favouriteSlice.actions.addItem(card));
      setLiked(!liked);
   };

   return (
      <div className={styles.card}>
         <div className={styles.content}>
            <img className={styles.image} src={card.avatar} alt="product" />
            <LikeIcon
               onClick={() => like()}
               className={styles.like}
               style={liked ? { fill: '#E74645', stroke: '#E74645' } : {}}
            />
            <span className={styles.name}>{card.name}</span>
            <span className={styles.description}>{card.description}</span>
            <Price card={card} />
            <Button
               card={card}
               children={'В корзину'}
               changed={'Добавлено'}
               width={'100%'}
            />
         </div>
      </div>
   );
};

export default Card;
