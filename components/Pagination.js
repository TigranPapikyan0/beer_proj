import styles from "../src/styles/Pagination.module.scss";


// { pageCount, setPage, pageId }

export const Pagination = () => {
    let pageCount = 5;
    let pageId = 2;

    return (
        <>
            <div className={styles.pagination}>
                {pageCount ? <span >&laquo;</span> : null}
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((num, i) => {
                    return (
                        <span
                            key={num}
                            // onClick={() => setPage(num)}
                            className={pageId === num ? styles.active : ""}
                        >
                            {num}
                        </span>
                    );
                })}
                {/* {pageCount ? <span onClick={() => setPage(pageCount)}>&raquo;</span> : null} */}
            </div>
        </>
    )
}