import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoresPage from './pages/StoresPage';
import DeliveryPage from './pages/DeliveryPage';
import PaymentPage from './pages/PaymentPage';
import ContactsPage from './pages/ContactsPage';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/HomePage';
import SignInPage from './pages/SignInPage';
import FavouritesPage from './pages/FavouritesPage';
import BasketPage from './pages/BasketPage';

function App() {
   return (
      <>
         <Navigation />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/sign" element={<SignInPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/basket" element={<BasketPage />} />
         </Routes>
      </>
   );
}

export default App;
