import React from "react";
import styles from "./Search.module.scss";

const Search = ({setSearch, setPageNumber}) => {

    return (
        <form
            onSubmit={(event) => {
            event.preventDefault();
        }}
            className="d-flex justify-content-center gap-4 mb-5">
            <input
                onChange={(event) => {
                setSearch(event.target.value);
                setPageNumber(1);
            }}
                type="text"
                placeholder="Search for characters"
                className={styles.input}></input>
            <button className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    )
}

export default Search
