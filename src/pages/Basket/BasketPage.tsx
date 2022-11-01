import React from 'react';
import styles from './Basket.module.scss';
import LogoSection from '../../components/LogoSection/LogoSection';
import Catalog from '../../components/Catalog/Catalog';
import OffersTitle from '../../components/OffersTitle/OffersTitle';
import { useSelector } from 'react-redux';
import BasketList from '../../components/BasketList/BasketList';

const BasketPage = () => {
   // const cards = useSelector<IState>((state) => state.cards.cards);

   // console.log(cards);

   return (
      <main className={styles.basket}>
         <LogoSection />
         <Catalog />
         <OffersTitle title={'Корзина'} />
         <BasketList />
      </main>
   );
};

export default BasketPage;
