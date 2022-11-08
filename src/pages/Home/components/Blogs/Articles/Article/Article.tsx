import React, { FC } from 'react';
import styles from './Article.module.scss';
import Read from '../../Read/Read';

interface ArticleProps {
   image: any;
}

const Article: FC<ArticleProps> = ({ image }) => {
   return (
      <div className={styles.article}>
         <div className={styles.image}>
            <img src={image} alt="Blog" />
         </div>
         <div className={styles.text}>
            <span className={styles.title}>Сухие корма для пожилых собак</span>
            <span className={styles.subtitle}>
               Наши любимые питомцы-старички нуждаются в особом питании. Сделали
               для вас обзор на корма для пожилых собак, чтобы вы могли выбрать
               правильное питание для них.
            </span>
            <Read />
         </div>
      </div>
   );
};

export default Article;
