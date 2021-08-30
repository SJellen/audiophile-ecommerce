import React, {useContext} from 'react'
import styles from '../styles/productPage/ProductPage.module.scss'
import {Context} from  '../context/Context'
import ImageNav from '../components/ImageNav'
import ProductHero from '../components/productPage/ProductHero'
import Features from '../components/productPage/Features'
import ProductImages from '../components/productPage/ProductImages'
import YouMayLike from '../components/productPage/YouMayLike'
import { useRouter } from 'next/router'

export default function ProductPage() {

    const {isCheckout, backUrl} = useContext(Context)

    const router = useRouter()

    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
            <div className={styles.header}></div>
            <div className={styles.goBack}><h4 onClick={() => router.push(backUrl)}>Go Back</h4></div>
            <ProductHero />
            <Features />
            <ProductImages />
            <YouMayLike />
            <ImageNav />
        </div>
    )
}


