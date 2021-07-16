import styles from '../../styles/productPage/ProductImages.module.scss'
import Image from 'next/image'

export default function ProductImages() {

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.topLeftContainer}></div>
                <div className={styles.bottomLeftContainer}></div>
            </div>
            <div className={styles.rightContainer}></div>
        </div>
    )
}