import React, { useEffect } from 'react';
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
import Notification from '../../components/Notification/Notification';
import Footer from '../../components/Footer/Footer';
import { ICards } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../asyncActions/cards';

const HomePage = () => {
   const dispatch = useDispatch();
   const cards = useSelector<ICards>((state) => state.cards);

   useEffect(() => {
   }, []);

   console.log(cards);

   return (
      <main className={styles.home}>
         <LogoSection />
         <Catalog />
         <Slider />
         {/*<Offers cards={cards} />*/}
         {/*<Novelties cards={cards} />*/}
         <Consultation />
         <Blogs />
         <Brands />
         <About />
         <Notification />
         <Footer />
      </main>
   );
};

export default HomePage;
