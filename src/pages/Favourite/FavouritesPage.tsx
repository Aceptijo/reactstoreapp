import React from 'react';
import TopSection from '../../components/TopSection/TopSection';
import styles from './Favourite.module.scss';
import Catalog from '../../components/Catalog/Catalog';
import FavouriteTitle from './components/FavouriteTitle/FavouriteTitle';
import FavouriteList from './components/FavouriteList/FavouriteList';
import Footer from '../../components/Footer/Footer';

const FavouritesPage = () => {
   return (
      <main className={styles.favourite}>
         <TopSection />
         <Catalog />
         <FavouriteTitle />
         <FavouriteList />
         <Footer />
      </main>
   );
};

export default FavouritesPage;
