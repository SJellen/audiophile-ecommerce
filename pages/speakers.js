import React, {useContext} from 'react'
import { Context } from '../context/Context'
import styles from '../styles/Speakers.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'
import SeeProduct from '../components/speaker/SeeProduct'

export default function Speakers() {

    const {isCheckout} = useContext(Context)

    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
            <CategoryHeader category="SPEAKERS" />
            <SeeProduct />
            <ImageNav />
        </div>
    )
}