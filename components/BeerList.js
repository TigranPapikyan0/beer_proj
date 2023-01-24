import styles from "../src/styles/BeerList.module.scss";
import Image from "next/image";
import Router from 'next/router';

export const BeerList = ({ data }) => {
    const sendProps = (beer) => {
        Router.push({
            pathname: '../beerInfo',
            query: beer
        })
    }

    return (
        <>
            <h1 className={styles.table_title}>List of beers</h1>
            <div className={styles.userBlock}>

                <table className={styles.users_table}>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        {data.map((beer, index) => {
                            return (
                                <tr key={beer[`id`]} onClick={() => sendProps(beer)}>
                                    <td>
                                        <Image src={beer[`image_url`]} width={100} height={260} alt="beer Image" />
                                    </td>
                                    <td>{beer[`name`]}</td>
                                    <td >
                                        {beer[`description`].length > 140 ? (beer[`description`].slice(0, 140) + '...') : beer[`description`]}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}