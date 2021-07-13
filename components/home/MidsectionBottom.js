import styles from '../../styles/home/MidsectionBottom.module.scss'
import Image from 'next/image'

export default function MidsectionBottom() {
    
    return (
        <div className={styles.bottomImgContainer}>
            <div className={styles.leftImgContainer}>
               <div className={styles.imgContainer}>
                <Image src="/assets/home/desktop/image-earphones-yx1.jpg" alt="speaker" width="540" height="320"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerTablet}>
                <Image src="/assets/home/tablet/image-earphones-yx1.jpg" alt="speaker" width="678" height="640"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerMobile}>
                <Image src="/assets/home/mobile/image-earphones-yx1.jpg" alt="speaker" width="654" height="400"  className={styles.img}/>
            </div> 
            </div>
            
        <div className={styles.rightImgContainer}>
            <div className={styles.textContainerTop}>
                <h2>YX1 EARPHONES</h2>
                <a>SEE PRODUCT</a>
            </div> 
        </div> 
    </div>
       
    )
}