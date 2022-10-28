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
         name: 'Грызуны',
         children: [
            {
               title: 'Еда',
               variation: ['Сухие корма', 'Лакомства', 'Витамины, пищевые добавки'],
            },
            {
               title: 'Гигиена',
               variation: ['Туалеты, купалки', 'Груминг, косметика', 'Наполнители, сено'],
            },
            {
               title: 'Аксессуары',
               variation: [
                  'Клетки',
                  'Игрушки, колеса, шары',
                  'Одежда',
                  'Миски, автокормушки, контейнеры',
                  'Домики',
               ],
            },
         ],
      },
      {
         name: 'Рыбки',
         children: [
            {
               title: 'Еда',
               variation: ['Корм', 'Лакомства'],
            },
            {
               title: 'Гигиена',
               variation: ['Химия'],
            },
            {
               title: 'Аксессуары',
               variation: ['Аквариум', 'Декорации', 'Аксессуары, оборудование'],
            },
         ],
      },
      {
         name: 'Птички',
         children: [
            {
               title: 'Еда',
               variation: ['Сухие корма', 'Лакомства', 'Витамины, пищевые добавки'],
            },
            {
               title: 'Гигиена',
               variation: [
                  'Купалки',
                  'Груминг, косметика',
                  'Наполнители, подстилки',
                  'Средства по уходу',
               ],
            },
            {
               title: 'Аксессуары',
               variation: ['Клетки', 'Поилки, кормушки'],
            },
         ],
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
