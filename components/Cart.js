import React, {useContext} from 'react'
import styles from '../styles/Cart.module.scss'
import { Context} from '../context/Context'


export default function Cart() {

    const {isCartOpen, cart} = useContext(Context)

    console.log(cart)
    
    return (
        <div className={styles.container} style={{display: isCartOpen ? "" : "none"}}>
            <div className={styles.topCartContainer}>
                <h2>Cart (3)</h2> <h3>Remove all</h3>
            </div>
        </div>
    )
}