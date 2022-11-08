import React from 'react';
import styles from './Basket.module.scss';
import TopSection from '../../components/TopSection/TopSection';
import Catalog from '../../components/Catalog/Catalog';
import BasketList from './components/BasketList/BasketList';
import Total from './components/Total/Total';
import BasketTitle from './components/BasketTitle/BasketTitle';
import Footer from '../../components/Footer/Footer';

const BasketPage = () => {
   return (
      <main className={styles.basket}>
         <TopSection />
         <Catalog />
         <BasketTitle />
         <div className={styles.section}>
            <BasketList />
            <Total />
         </div>
         <Footer />
      </main>
   );
};

export default BasketPage;
