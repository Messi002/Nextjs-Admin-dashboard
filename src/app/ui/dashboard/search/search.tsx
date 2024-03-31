import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

interface Searchprops {
  placeholder: string;
}

const Search: React.FC<Searchprops> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch /><input type="text" placeholder={`search for a ${placeholder}...`} className={styles.input}/>
    </div>
  );
};

export default Search;
