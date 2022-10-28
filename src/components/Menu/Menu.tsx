import React, { FC } from 'react';
import styles from './Menu.module.scss';
import { IAnimals } from '../../types/types';
import { ReactComponent as ArrowIcon } from './arrowIcon.svg';

interface MenuProps {
   animals: IAnimals[];
}

const Menu: FC<MenuProps> = ({ animals }) => {
   return (
      <ul className={styles.menu}>
         {animals.map((animal) => (
            <li className={styles.animal}>
               <span className={styles.name}>{animal.name}</span>
               <ArrowIcon className={styles.arrow} />
               <div className={styles.container}>
                  {animal.children.map((child) => (
                     <ul className={styles.group}>
                        <span className={styles.title}>{child.title}</span>
                        {child.variation?.map((variant) => (
                           <li className={styles.item}>
                              <span className={styles.text}>
                                 {variant.length > 20 ? variant.slice(0, 23) + '...' : variant}
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
