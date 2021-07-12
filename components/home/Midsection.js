import styles from '../../styles/home/Midsection.module.scss'
import Image from 'next/image'

export default function Midsection() {

    return (
        <div className={styles.container}>
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

            </div>
            

        </div>
    )

}