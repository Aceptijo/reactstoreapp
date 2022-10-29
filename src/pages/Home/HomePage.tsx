import React from 'react';
import styles from './Home.module.scss';
import Catalog from '../../components/Catalog/Catalog';
import LogoSection from '../../components/LogoSection/LogoSection';
import Slider from '../../components/Slider/Slider';
import Offers from '../../components/Offers/Offers';

const HomePage = () => {
   return (
      <main className={styles.home}>
         <LogoSection />
         <Catalog />
         <Slider />
         <Offers />
      </main>
   );
};

export default HomePage;
