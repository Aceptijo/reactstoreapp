import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../TopSection/Logo/Logo';
import Info from './Info/Info';
import Phones from './Phones/Phones';

const Footer = () => {
   const catalogList = [
      'Кошки',
      'Собаки',
      'Грызуны',
      'Рыбки',
      'Птицы',
      'Витамины',
   ];
   const companyList = [
      'О нас',
      'Контакты',
      'Наши магазины',
      'Пункты выдачи',
      'Вакансии',
   ];

   return (
      <footer className={styles.container}>
         <div className={styles.line}>
            <Logo color={'white'} />
            <Info list={catalogList} title={'Каталог'} />
            <Info list={companyList} title={'Компания'} />
            <Phones />
         </div>
      </footer>
   );
};

export default Footer;
