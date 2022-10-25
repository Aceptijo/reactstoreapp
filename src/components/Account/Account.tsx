import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AccountIcon } from './accounticon.svg';
import styles from './Account.module.scss';

const Account = () => {
   return (
      <div className={styles.account}>
         <AccountIcon />
         <Link to="/sign">Войти</Link>
      </div>
   );
};

export default Account;
