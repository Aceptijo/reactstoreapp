import React, { FC, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../store/action-creators/cards';

const HomePage: FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      fetchCards()(dispatch);
   }, [dispatch]);

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
         <Notification />
         <Footer />
      </main>
   );
};

export default HomePage;
