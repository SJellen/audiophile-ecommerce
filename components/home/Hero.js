import styles from '../../styles/home/Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/assets/home/desktop/image-hero.jpg" alt="headphones" width="1440" height="729"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerTablet}>
                <Image src="/assets/home/tablet/image-header.jpg" alt="headphones" width="1536" height="1458"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerMobile}>
                <Image src="/assets/home/mobile/image-header.jpg" alt="headphones" width="750" height="1200"  className={styles.img}/>
            </div>
            <div className={styles.textContainer}>

            </div>
        
        </div>
    )
}