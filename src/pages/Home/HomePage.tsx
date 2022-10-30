import React from 'react';
import styles from './Home.module.scss';
import Catalog from '../../components/Catalog/Catalog';
import LogoSection from '../../components/LogoSection/LogoSection';
import Slider from '../../components/Slider/Slider';
import Offers from '../../components/Offers/Offers';
import Novelties from '../../components/ Novelties/Novelties';
import Consultation from '../../components/Consultation/Consultation';
import Blogs from '../../components/Blogs/Blogs';
import Brands from '../../components/Brands/Brands';
import About from '../../components/About/About';

const HomePage = () => {
   return (
      <main className={styles.home}>
         <LogoSection />
         <Catalog />
         <Slider />
         <Offers />
         <Novelties />
         <Consultation />
         <Blogs />
         <Brands />
         <About />
      </main>
   );
};

export default HomePage;
