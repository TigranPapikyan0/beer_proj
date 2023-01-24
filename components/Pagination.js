import styles from "../src/styles/Pagination.module.scss";

export const Pagination = ({ pageCount, currentPage, setPage }) => {

    return (
        <>
            <div className={styles.pagination}>
                {pageCount ? <span onClick={() => setPage(1)}>&laquo;</span> : null}
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((num, i) => {
                    return (
                        <span
                            key={num}
                            onClick={() => setPage(num)}
                            className={currentPage === num ? styles.active : ""}
                        >
                            {num}
                        </span>
                    );
                })}
                {pageCount ? <span onClick={() => setPage(pageCount)}>&raquo;</span> : null}
            </div>
        </>
    )
}