import React, {useContext} from 'react'
import { Context } from '../context/Context'
import styles from '../styles/Headphones.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'
import SeeProduct from '../components/headphones/SeeProduct'

export default function Headphones() {

    const {isCheckout} = useContext(Context)
    
    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
            <CategoryHeader category="HEADPHONES" />
            <SeeProduct />
            <ImageNav />
        </div>
    )
}