import React, {useContext} from 'react'
import { Context } from '../context/Context'
import Image from 'next/image'
import styles from '../styles/OrderCompleteItems.module.scss'

export default function OrderCompleteItems() {

    const {filteredCart} = useContext(Context)

    const productMapping = filteredCart && filteredCart.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <Image src={item.image} alt="product thumbnail" width="150" height="150"  className={styles.img}/>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.name}>{item.displayName}</h4>
                    <h4 className={styles.price}>$ {item.price?.toLocaleString("en-US")}</h4>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.quantityBox}>x{item.quantity}</div>
            </div>
        </div>
    ))

    return (
        <div>{productMapping}</div>
    )
}