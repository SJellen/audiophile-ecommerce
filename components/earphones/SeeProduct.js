import styles from '../../styles/earphones/SeeProduct.module.scss'
import Image from 'next/image'

export default function SeeProduct() {

    return (
        <div>
            <div className={styles.itemContainer} >
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-earphones/desktop/image-yx1-earphones.jpg" alt="earphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-earphones/tablet/image-yx1-earphones.jpg" alt="earphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-earphones/mobile/image-yx1-earphones.jpg" alt="earphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>YX1 EARPHONES</h2>
                        <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                        <a>SEE PRODUCT</a> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}