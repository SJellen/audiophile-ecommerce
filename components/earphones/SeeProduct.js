import React, {useContext} from 'react'
import styles from '../../styles/SeeProduct.module.scss'
import Image from 'next/image'
import {Context} from '../../context/Context'
import Link from 'next/link'

export default function SeeProduct() {

    const {handleSeeProductClick} = useContext(Context)

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
                        <h2>YX1 WIRELESS EARPHONES</h2>
                        <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                        <Link href="/productPage">
                            <a onClick={() => handleSeeProductClick(0)}>SEE PRODUCT</a> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}