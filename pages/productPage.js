import React, {useContext} from 'react'
import styles from '../styles/productPage/ProductPage.module.scss'
import {Context} from  '../context/Context'
import ImageNav from '../components/ImageNav'
import ProductHero from '../components/productPage/ProductHero'
import Features from '../components/productPage/Features'
import ProductImages from '../components/productPage/ProductImages'
import YouMayLike from '../components/productPage/YouMayLike'

export default function ProductPage() {

    const {isCheckout, handleBackClick} = useContext(Context)

    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
            <div className={styles.header}></div>
            <div className={styles.goBack}><h4 onClick={handleBackClick}>Go Back</h4></div>
            <ProductHero />
            <Features />
            <ProductImages />
            <YouMayLike />
            <ImageNav />
        </div>
    )
}


