import styles from "../src/styles/Filter.module.scss";
import { useState } from "react";


export const FilterData = ({ searchByName }) => {

    const [name, setName] = useState('')

    const search = (event) => {
        event.preventDefault();
        searchByName(name);
    }


    return (
        <div className={styles.filter_block}>
            <form className="filter_block__form" onSubmit={search}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Search by name" />
            </form>
        </div>
    )
}