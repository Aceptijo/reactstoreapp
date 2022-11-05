import React from 'react';
import styles from './Notification.module.scss';
import img from '../Notification/dogImage2.png';
import Button from '../Button/Button';

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
               <Button children={'Подписаться'} changed={'Готово'} width={'45%'} />
            </form>
         </div>
      </section>
   );
};

export default Notification;
