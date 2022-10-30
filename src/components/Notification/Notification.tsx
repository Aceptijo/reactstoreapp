import React from 'react';
import styles from './Notification.module.scss';
import Button from '../Button/Button';
import img from '../Notification/dogImage2.png';

const Notification = () => {
   return (
      <section className={styles.line}>
         <div className={styles.picture}>
            <img className={styles.image} src={img} alt="Notification picture" />
         </div>
         <div className={styles.container}>
            <span className={styles.title}>
               Хотите узнавать о новых скидках и специальных предложениях?
            </span>
            <form className={styles.form}>
               <input type="text" placeholder={'Ваша электронная почта '} />
               <Button children={'Подписаться'} value={'45%'} />
            </form>
         </div>
      </section>
   );
};

export default Notification;
