import React from 'react';
import styles from './Consultation.module.scss';
import Button from '../../../../components/Button/Button';
import img from './dogImage.png';

const Consultation = () => {
   return (
      <section className={styles.line}>
         <div className={styles.container}>
            <span className={styles.title}>
               Не знаете как правильно подобрать корм для Вашего питомца?
            </span>
            <span className={styles.subtitle}>
               Обратитесь за помощью к нашим специалистам и они решат Вашу
               проблему
            </span>
            <Button
               children={'Получить консультацию'}
               changed={'Отправлено'}
               width={'50%'}
            />
         </div>
         <div className={styles.picture}>
            <img className={styles.image} src={img} alt="" />
         </div>
      </section>
   );
};

export default Consultation;
