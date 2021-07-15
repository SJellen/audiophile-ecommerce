import React, {useContext} from 'react'
import styles from '../../styles/ProductPage/Features.module.scss'
import { Context } from '../../context/Context'

export default function Features() {

    const {currentProduct} = useContext(Context)

    const contents = currentProduct.includes.map((x, index) => <li key={index} className={styles.li}><span className={styles.count}>{x.quantity}x</span>{x.item}</li>)

    return (
        <div className={styles.container}>
            <div className={styles.featureContainer}>
                <h2>FEATURES</h2>
                <p>{currentProduct?.features}</p>
            </div>
            <div className={styles.contentsContainer}>
                <div className={styles.textBox}>
                    <h2>IN THE BOX</h2>
                    <ul>{contents}</ul>
                </div>
            </div>
        </div>
    )
}