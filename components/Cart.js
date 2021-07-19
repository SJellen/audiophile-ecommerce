import React, {useContext} from 'react'
import styles from '../styles/Cart.module.scss'
import { Context} from '../context/Context'
import useCartLogic from '../logic/useCartLogic'
import Image from 'next/image'
import image from 'next/image'


export default function Cart() {

    const {isCartOpen, cart} = useContext(Context)
    const {filteredCart, handleRemoveAllClick} = useCartLogic()


    const productMapping = filteredCart.map((item, index) => (
        <div key={item[index]} className={styles.itemContainer}>
            <div className={styles.imgContainer}>
                <Image src={item.image} alt="product thumbnail" width="150" height="150"  className={styles.img}/>
            </div>
           

        </div>
    ))
    
    return (
        <div className={styles.container} style={{display: isCartOpen ? "" : "none"}}>
            <div className={styles.topCartContainer}>
                <h2>Cart ({filteredCart.length})</h2> <h3 onClick={() => handleRemoveAllClick()}>Remove all</h3>
            </div>
            {productMapping}
        </div>
    )
}