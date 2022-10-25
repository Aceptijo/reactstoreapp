import React from 'react';
import { ReactComponent as MapIcon } from './mapicon.svg';
import styles from './Geolocation.module.scss';

const Geolocation = () => {
   return (
      <div className={styles.geolocation}>
         <MapIcon />
         <span>Минск</span>
      </div>
   );
};

export default Geolocation;
