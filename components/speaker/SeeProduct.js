import styles from '../../styles/speaker/SeeProduct.module.scss'
import Image from 'next/image'

export default function SeeProduct() {

    return (
        <div>

            <div className={styles.itemContainer} >
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-speakers/desktop/image-zx9.jpg" alt="earphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-speakers/tablet/image-zx9.jpg" alt="earphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-speakers/mobile/image-zx9.jpg" alt="earphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>ZX9<br></br>SPEAKER</h2>
                        <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                        <a>SEE PRODUCT</a> 
                    </div>
                    
                </div>
            </div>

            <div className={styles.itemContainer} style={{flexDirection: "row-reverse"}}>
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-speakers/desktop/image-zx7.jpg" alt="earphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-speakers/tablet/image-zx7.jpg" alt="earphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-speakers/mobile/image-zx7.jpg" alt="earphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer} style={{justifyContent: "flex-start"}}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>ZX7<br></br>SPEAKER</h2>
                        <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                        <a>SEE PRODUCT</a> 
                    </div>
                    
                </div>
            </div>

            

        </div>
    )
}