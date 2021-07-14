import React, {useContext} from 'react'
import styles from '../../styles/home/MidsectionMid.module.scss'
import Image from 'next/image'
import {Context} from '../../context/Context'

export default function MidsectionMid() {

    const {handleSeeProductClick} = useContext(Context)
    
    return (
        <div className={styles.midImgContainer}>
            <div className={styles.imgContainer}>
                <Image src="/assets/home/desktop/image-speaker-zx7.jpg" alt="speaker" width="1110" height="320"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerTablet}>
                <Image src="/assets/home/tablet/image-speaker-zx7.jpg" alt="speaker" width="689" height="320"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerMobile}>
                <Image src="/assets/home/mobile/image-speaker-zx7.jpg" alt="speaker" width="654" height="640"  className={styles.img}/>
            </div>
            <div className={styles.midTextContainer}>
                <h2>ZX7 SPEAKER</h2>
                <a onClick={() => handleSeeProductClick(4)}>SEE PRODUCT</a>
            </div>
        </div>
    )
}