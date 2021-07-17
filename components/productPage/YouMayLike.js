import styles from '../../styles/productPage/YouMayLike.module.scss'

export default function YouMayLike() {

    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>YOU MAY ALSO LIKE</h1>
            <div className={styles.productFlexContainer}>
                <div className={styles.productBox}></div>
                <div className={styles.productBox}></div>
                <div className={styles.productBox}></div>
            </div>
                
        </div>
    )
}