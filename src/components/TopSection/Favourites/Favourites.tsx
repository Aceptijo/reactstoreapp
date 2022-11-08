import React from 'react';
import { ReactComponent as FavouriteIcon } from './favouritesIcon.svg';
import styles from './Favourites.module.scss';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
   const navigation = useNavigate();

   return (
      <div onClick={() => navigation('/favourites')} className={styles.favourites}>
         <FavouriteIcon className={styles.icon} />
         <span>Избранное</span>
      </div>
   );
};

export default Favourites;
