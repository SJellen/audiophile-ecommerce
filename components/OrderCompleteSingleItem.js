import React, {useContext} from 'react'
import { Context } from '../context/Context'
import Image from 'next/image'
import styles from '../styles/OrderCompleteItems.module.scss'

export default function OrderCompleteSingleItems() {

    const {filteredCart} = useContext(Context)

    return (
        filteredCart && filteredCart[0] ? 
            <div key={filteredCart[0]} className={styles.itemContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <Image src={filteredCart[0].image} alt="product thumbnail" width="150" height="150"  className={styles.img}/>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.name}>{filteredCart[0]?.displayName}</h4>
                    <h4 className={styles.price}>$ {filteredCart[0]?.price?.toLocaleString("en-US")}</h4>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.quantityBox}>x{filteredCart[0]?.quantity}</div>
            </div>
        </div>
        : ''
    )
}