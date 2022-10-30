import React, { FC } from 'react';
import styles from './Article.module.scss';
import More from '../More/More';

interface ArticleProps {
   image: any;
}

const Article: FC<ArticleProps> = ({ image }) => {
   return (
      <div className={styles.article}>
         <div className={styles.image}>
            <img src={image} alt="Blog image" />
         </div>
         <div className={styles.text}>
            <span className={styles.title}>Сухие корма для пожилых собак</span>
            <span className={styles.subtitle}>
               Наши любимые питомцы-старички нуждаются в особом питании. Сделали для вас обзор на
               корма для пожилых собак, чтобы вы могли выбрать правильное питание для них.
            </span>
            <More />
         </div>
      </div>
   );
};

export default Article;
