import React, { FC } from 'react';
import styles from './Menu.module.scss';
import { IAnimals } from '../../../types/types';
import { ReactComponent as ArrowIcon } from './arrowIcon.svg';

interface MenuProps {
   animals: IAnimals[];
}

const Menu: FC<MenuProps> = ({ animals }) => {
   return (
      <ul className={styles.menu}>
         {animals.map((animal, index, arr) => (
            <li
               className={styles.animal}
               style={
                  index === arr.length - 1
                     ? { borderRadius: '0px 0px 20px 20px' }
                     : { borderRadius: 'none' }
               }
               key={index}
            >
               <span className={styles.name}>{animal.name}</span>
               {animal.children.length > 0 ? (
                  <ArrowIcon className={styles.arrow} />
               ) : (
                  <></>
               )}
               <div
                  className={styles.container}
                  style={{ top: `${62 * index}px` }}
               >
                  {animal.children.map((child, index) => (
                     <ul className={styles.group} key={index}>
                        <span className={styles.title}>{child.title}</span>
                        {child.variation.map((variant, index) => (
                           <li className={styles.item} key={index}>
                              <span className={styles.text}>
                                 {variant.length > 20
                                    ? variant.slice(0, 23) + '...'
                                    : variant}
                              </span>
                           </li>
                        ))}
                     </ul>
                  ))}
               </div>
            </li>
         ))}
      </ul>
   );
};

export default Menu;
