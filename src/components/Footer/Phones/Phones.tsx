import React from 'react';
import styles from './Phones.module.scss';

const Phones = () => {
   return (
      <div className={styles.contacts}>
         <a href="tel: +375123456789">+375 (12) 345-67-89</a>
         <a href="tel: +375124355459">+375 (12) 435-54-59</a>
         <span>Прием заказов круглосуточно</span>
         <a className={styles.mail} href="mailto: scandavee@gmail.com">
            kotopuzic-shop@gmail.com
         </a>
      </div>
   );
};

export default Phones;
