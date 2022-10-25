import React from 'react';
import { ReactComponent as SearchIcon } from './searchIcon.svg';
import styles from './Search.module.scss';

const Search = () => {
   return (
      <form className={styles.search}>
         <SearchIcon />
         <input type="text" />
      </form>
   );
};

export default Search;
