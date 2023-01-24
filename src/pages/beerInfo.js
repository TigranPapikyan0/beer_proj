import Image from "next/image";
import Router, { useRouter } from 'next/router';
import styles from "../styles/BeerInfo.module.scss";

const BeerInfo = () => {
    const router = useRouter();
    const data = router.query;
    const { image_url, name, tagline, description, abv, food_pairing } = data;

    const sendProps = () => {
        Router.push({
            pathname: '/',
        }
        )
    }

    return (
        <>
            <div className={styles.beerInfo_main}>

                <div className={styles.beerInfo_block}>
                    <div className={styles.block_mainList}>
                        <button className={styles.btn_mainList} onClick={() => sendProps()}>Main list</button>
                    </div>
                    <h1 className={styles.title}>BeerInfo</h1>
                    <p>{name}</p><br />
                    <p><Image src={image_url} width={60} height={160} alt="beer Image" /></p><br />

                    <p>{`Tagline - ${tagline}`}</p><br />
                    <p>{`Description - ${description}`}</p><br />
                    <p>{`ABV - ${abv}`}</p><br />
                    <p>{`Food Pairing - ${food_pairing}`}</p>
                </div>
            </div>
        </>
    )

}

export default BeerInfo;