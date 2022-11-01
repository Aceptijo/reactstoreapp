import React, { FC } from 'react';
import styles from './Info.module.scss';

interface InfoProps {
   list: string[];
   title?: string;
}

const Info: FC<InfoProps> = ({ list, title }) => {
   return (
      <div className={styles.container}>
         <ul className={styles.list}>
            <li className={styles.title}>{title}</li>
            {list.map((item, index) => (
               <li className={styles.item} key={index}>
                  {item}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Info;
