import React, {useContext} from 'react'
import styles from '../../styles/productPage/ProductHero.module.scss'
import { Context } from '../../context/Context'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductHero() {

    const {currentProduct} = useContext(Context)

    console.log(typeof currentProduct?.image.desktop)

    return (
            <div className={styles.itemContainer} >
                <div className={styles.imgContainer}>
                    <Image src={`${currentProduct?.image.desktop}`} alt="speaker" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src={`${currentProduct?.image.tablet}`} alt="speaker" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src={`${currentProduct?.image.mobile}`} alt="speaker" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>{currentProduct?.name}</h2>
                        <p>{currentProduct?.description}</p>

                        <h3>${currentProduct?.price}</h3>
                        <div className={styles.addToCartContainer}>
                            <a>ADD TO CART</a>
                        </div>    
                    </div>
                </div>
            </div>   
    )
}