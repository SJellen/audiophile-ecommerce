import React, {useContext} from 'react'
import { Context } from '../context/Context'
import styles from '../styles/Earphones.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'
import SeeProduct from '../components/earphones/SeeProduct'

export default function Earphones() {

    const {isCheckout} = useContext(Context)
    
    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
            <CategoryHeader category="EARPHONES" />
            <SeeProduct />
            <ImageNav />
        </div>
    )
}