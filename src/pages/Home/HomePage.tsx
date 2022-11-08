import React, { FC, useEffect } from 'react';
import styles from './Home.module.scss';
import Catalog from '../../components/Catalog/Catalog';
import TopSection from '../../components/TopSection/TopSection';
import Slider from './components/Slider/Slider';
import Offers from '../../components/Offers/Offers';
import Novelties from '../../components/Novelties/Novelties';
import Consultation from './components/Consultation/Consultation';
import Blogs from './components/Blogs/Blogs';
import Brands from './components/Brands/Brands';
import About from './components/About/About';
import Notification from '../../components/Notification/Notification';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchCards } from '../../store/action-creators/ActionCreators';

const HomePage: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchCards());
   }, [dispatch]);

   return (
      <main className={styles.home}>
         <TopSection />
         <Catalog />
         <Slider />
         <Offers />
         <Novelties />
         <Consultation />
         <Blogs />
         <Brands />
         <About />
         <Notification />
      </main>
   );
};

export default HomePage;
