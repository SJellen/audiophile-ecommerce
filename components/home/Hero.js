import React, {useContext} from 'react'
import styles from '../../styles/home/Hero.module.scss'
import Image from 'next/image'
import {Context} from '../../context/Context'

export default function Hero() {

    const {handleSeeProductClick} = useContext(Context)

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
                <span>NEW PRODUCT</span>
                <h1>XX99 Mark II Headphones</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <a onClick={() => handleSeeProductClick(0)}>SEE PRODUCT</a>
            </div>
        </div>
    )
}