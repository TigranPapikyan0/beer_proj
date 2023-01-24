import styles from "../src/styles/Filter.module.scss";
import { useState } from "react";


export const FilterData = ({ searchByName }) => {

    const [name, setName] = useState('')

    const search = (event) => {
        event.preventDefault();
        searchByName(name);
    }

    const changeInputValue = (e) => {
        setName(e.target.value);
        if(!e.target.value) {
            searchByName('');
        }
    }


    return (
        <div className={styles.filter_block}>
            <form className="filter_block__form" onSubmit={search}>
                <input type="search" value={name} onChange={changeInputValue} name="name" placeholder="Search by name" />
            </form>
        </div>
    )
}