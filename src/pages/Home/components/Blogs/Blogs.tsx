import React from 'react';
import Title from '../../../../components/Title/Title';
import styles from './Blogs.module.scss';
import Articles from './Articles/Articles';

const Blogs = () => {
   return (
      <section className={styles.container}>
         <Title title={'Блог'} />
         <Articles />
      </section>
   );
};

export default Blogs;
