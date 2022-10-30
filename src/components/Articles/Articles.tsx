import React from 'react';
import styles from './Articles.module.scss';
import Article from '../Article/Article';
import firstImg from './articleImage1.png';
import secImg from './articleImage2.png';

const Articles = () => {
   return (
      <div className={styles.row}>
         <Article image={firstImg} />
         <Article image={secImg} />
      </div>
   );
};

export default Articles;
