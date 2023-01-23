import styles from "../src/styles/BeerList.module.scss";
import Image from "next/image";

export const BeerList = ({ data }) => {
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
                            <tr key={beer[`id`]}>
                                <td>
                                    <Image src={beer[`image_url`]} width={100} height={260} alt="beer Image" />
                                </td>
                                <td>{beer[`name`]}</td>
                                <td >

                                    {beer[`description`].length > 140 ? (beer[`description`].slice(0,140) + '...' ) :  beer[`description`]}

                                </td>
                            </tr>
                            // <tr
                            //     key={data[`id`]}
                            //     className={selectedItem.id === data[`id`] ? "active" : ""}
                            //     onClick={() => setSelectedItem((prev) => data)}
                            // >
                            //     <td>{data[`name`]}</td>
                            //     <td>{data[`lastName`]}</td>
                            //     <td>{data[`email`]}</td>
                            //     <td>{data[`access`]}</td>
                            //     <td>{data[`birthDate`]}</td>
                            //     <td className="cell_delete"><button className="button button_Delete" onClick={() => deleteUser(index)}>Delete</button></td>
                            // </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
       
    )
}