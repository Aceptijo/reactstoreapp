import React from 'react';
import styles from './Brands.module.scss';
import Title from '../../../../components/Title/Title';
import { ReactComponent as FriskiesLogo } from './friskiesLogo.svg';
import { ReactComponent as PurinaoneLogo } from './purinaoneLogo.svg';
import { ReactComponent as RoyalcaninLogo } from './royalcaninLogo.svg';
import { ReactComponent as WhiskasLogo } from './whiskasLogo.svg';

const Brands = () => {
   return (
      <section className={styles.container}>
         <Title title={'Бренды'} />
         <div className={styles.line}>
            <FriskiesLogo />
            <RoyalcaninLogo />
            <PurinaoneLogo />
            <WhiskasLogo />
         </div>
      </section>
   );
};

export default Brands;
