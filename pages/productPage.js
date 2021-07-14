import React, {useContext} from 'react'
import styles from '../styles/ProductPage.module.scss'
import Image from 'next/image'
import {Context} from  '../context/Context'
import ImageNav from '../components/ImageNav'
import ProductHero from '../components/productPage/ProductHero'

export default function ProductPage() {

    const {currentProduct} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.goBack}><h4>Go Back</h4></div>
            <ProductHero />
            <ImageNav />

        </div>
    )
}


