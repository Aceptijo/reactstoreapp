import React, { useState } from 'react';
import styles from './Basket.module.scss';
import LogoSection from '../../components/LogoSection/LogoSection';
import Catalog from '../../components/Catalog/Catalog';
import BasketList from '../../components/BasketList/BasketList';
import Total from '../../components/Total/Total';
import BasketTitle from '../../components/BasketTitle/BasketTitle';
import Footer from '../../components/Footer/Footer';
import { Context } from './Context';

const BasketPage = () => {
   const [quantity, setQuantity] = useState(1);

   return (
      <main className={styles.basket}>
         <LogoSection />
         <Catalog />
         <BasketTitle />
         <div className={styles.section}>
            <Context.Provider value={{ quantity, setQuantity }}>
               <BasketList />
               <Total />
            </Context.Provider>
         </div>
         <Footer />
      </main>
   );
};

export default BasketPage;
