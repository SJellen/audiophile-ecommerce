import React, {useContext} from 'react'
import styles from '../styles/ProductPage.module.scss'
import Image from 'next/image'
import {Context} from  '../context/Context'
import ImageNav from '../components/ImageNav'

export default function ProductPage() {

    const {currentProduct} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <ImageNav />

        </div>
    )
}


