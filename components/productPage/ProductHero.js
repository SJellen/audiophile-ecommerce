import React, {useContext} from 'react'
import styles from '../../styles/productPage/ProductHero.module.scss'
import { Context } from '../../context/Context'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductHero() {

    const {currentProduct, productPageQuantity, handleProductPageDecrement, handleProductPageIncrement, handleAddToCartClick} = useContext(Context)

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
                        <h3><span>$</span>{currentProduct?.price.toLocaleString("en-US")}</h3>
                        <div className={styles.addToCartContainer}>
                            <div className={styles.quantityBox}>
                                <span className={styles.minus} onClick={handleProductPageDecrement}>-</span>
                                {productPageQuantity}
                                 <span className={styles.plus} onClick={handleProductPageIncrement}>+</span>
                            </div>
                            <a onClick={handleAddToCartClick}>ADD TO CART</a>
                        </div>    
                    </div>
                </div>
            </div>   
    )
}