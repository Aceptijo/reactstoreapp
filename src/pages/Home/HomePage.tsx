import React from 'react';
import styles from './Home.module.scss';
import Catalog from '../../components/Catalog/Catalog';
import LogoSection from '../../components/LogoSection/LogoSection';
import Slider from '../../components/Slider/Slider';

const HomePage = () => {
   return (
      <main className={styles.home}>
         <LogoSection />
         <Catalog />
         <Slider />
      </main>
   );
};

export default HomePage;
