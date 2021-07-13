import styles from '../../styles/home/MidsectionTop.module.scss'
import Image from 'next/image'

export default function MidsectionTop() {
    
    return (
        <div className={styles.topImgContainer}>
            <div className={styles.imgContainer}>
                <Image src="/assets/home/desktop/image-speaker-zx9.png" alt="speaker" width="765" height="918"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerTablet}>
                <Image src="/assets/home/tablet/image-speaker-zx9.png" alt="speaker" width="366" height="444"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerMobile}>
                <Image src="/assets/home/mobile/image-speaker-zx9.png" alt="speaker" width="320" height="388"  className={styles.img}/>
            </div>
            <div className={styles.circle}>
                <Image src="/assets/home/desktop/pattern-circles.svg" alt="circle design" width="944" height="944"  className={styles.svg}/>
            </div>
            <div className={styles.textContainerTop}>
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <a>SEE PRODUCT</a>
            </div>
        </div>
    )
}