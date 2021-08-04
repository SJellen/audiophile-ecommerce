import React, {useContext} from 'react'
import styles from '../styles/BestGear.module.scss'
import Image from 'next/image'
import { Context } from '../context/Context'

export default function BestGear() {

    const {isCheckout, isCartOpen} = useContext(Context)

    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : '', filter: isCheckout || isCartOpen ? "brightness(.55)" : " ", backgroundColor: isCheckout || isCartOpen ? "silver" : ''}}>
            <div className={styles.textContainer}>
                <h2>Bringing you the <span>best</span> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/assets/shared/desktop/image-best-gear.jpg" alt="man with headphones" width="540" height="588"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerTablet}>
                <Image src="/assets/shared/tablet/image-best-gear.jpg" alt="man with headphones" width="689" height="300"  className={styles.img}/>
            </div>
            <div className={styles.imgContainerMobile}>
                <Image src="/assets/shared/mobile/image-best-gear.jpg" alt="man with headphones" width="327" height="300"  className={styles.img}/>
            </div>


        </div>
    )
}