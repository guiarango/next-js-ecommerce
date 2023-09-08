import { useCallback, useRef } from "react";
import { useRouter } from "next/router";

//Fonts & Icons
import { BsSearch } from "react-icons/bs";

//Styles
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const navigate = useRouter();
  const search = useRef();
  const handlesubmit = useCallback((event) => {
    event.preventDefault();

    if (search.current.value == "") return;

    navigate.push(`/searchResults?name=${search.current.value}`);
    search.current.value = "";
  }, []);

  return (
    <form className={classes.form} on onSubmit={handlesubmit}>
      <input
        ref={search}
        type="text"
        placeholder="Search"
        className={classes.input}
      />
      <button type="submit" className={classes.button}>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
