import React, { FC } from 'react';
import styles from './Catalog.module.scss';
import { ReactComponent as SmallIcon } from './petsSmallIcon.svg';
import { ReactComponent as GreatIcon } from './petsGreatIcon.svg';
import { ReactComponent as BurgerIcon } from './burgerIcon.svg';
import { IAnimals } from '../../types/types';
import Menu from '../Menu/Menu';

const Catalog: FC = () => {
   const animals: IAnimals[] = [
      {
         name: 'Кошки',
         children: [
            {
               title: 'Еда',
               variation: [
                  'Сухие корма',
                  'Пресервы',
                  'Консервы',
                  'Лакомства',
                  'Витамины, пищевые добавки',
                  'Био и фитопрепараты',
               ],
            },
            {
               title: 'Гигиена',
               variation: ['Туалеты, пелёнки', 'Груминг, косметика'],
            },
            {
               title: 'Аксессуары',
               variation: [
                  'Ошейники, поводки',
                  'Рулетки',
                  'Одежда',
                  'Миски, автокормушки, контейнеры',
                  'Игрушки',
               ],
            },
         ],
      },
      {
         name: 'Собаки',
         children: [],
      },
      {
         name: 'Грызуны',
         children: [],
      },
      {
         name: 'Рыбки',
         children: [],
      },
      {
         name: 'Птички',
         children: [],
      },
      {
         name: 'Ветаптека',
         children: [],
      },
   ];

   return (
      <section className={styles.catalog}>
         <button className={styles.button}>
            <BurgerIcon />
            <span className={styles.name}>Каталог</span>
            <SmallIcon />
            <GreatIcon />
            <Menu animals={animals} />
         </button>
      </section>
   );
};

export default Catalog;
