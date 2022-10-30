import React from 'react';
import OffersTitle from '../OffersTitle/OffersTitle';
import styles from './Blogs.module.scss';
import Articles from '../Articles/Articles';

const Blogs = () => {
   return (
      <section className={styles.container}>
         <OffersTitle title={'Блог'} />
         <Articles />
      </section>
   );
};

export default Blogs;
