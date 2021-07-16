import React, {useContext} from 'react'
import { Context } from '../../context/Context'
import styles from '../../styles/productPage/ProductImages.module.scss'
import Image from 'next/image'

export default function ProductImages() {

    const {currentProduct, productPageQuantity} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.topLeftContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.gallery.first.desktop}`} alt="current product image one" width="445" height="280"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.gallery.first.tablet}`} alt="current product image one" width="554" height="348"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.gallery.first.mobile}`} alt="current product image one" width="654" height="348"  className={styles.img}/>
                    </div>
                </div>
                <div className={styles.bottomLeftContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.gallery.second.desktop}`} alt="current product image two" width="445" height="280"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.gallery.second.tablet}`} alt="current product image two" width="554" height="348"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.gallery.second.mobile}`} alt="current product image two" width="654" height="348"  className={styles.img}/>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
            <div className={styles.bottomLeftContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.gallery.third.desktop}`} alt="current product image three" width="635" height="592"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.gallery.third.tablet}`} alt="current product image three" width="790" height="736"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.gallery.third.mobile}`} alt="current product image three" width="654" height="736"  className={styles.img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}