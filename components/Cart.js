import React, {useContext} from 'react'
import styles from '../styles/Cart.module.scss'
import { Context} from '../context/Context'
import useCartLogic from '../logic/useCartLogic'
import Image from 'next/image'
import image from 'next/image'


export default function Cart() {

    const {isCartOpen, cart} = useContext(Context)
    const {filteredCart, handleRemoveAllClick, totalPrice} = useCartLogic()


    const productMapping = filteredCart.map((item, index) => (
        <div key={item[index]} className={styles.itemContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <Image src={item.image} alt="product thumbnail" width="150" height="150"  className={styles.img}/>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.name}>{item.displayName}</h4>
                    <h4 className={styles.price}>$ {item.price.toLocaleString("en-US")}</h4>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.quantityBox}>
                    <span className={styles.minus} >-</span>
                                {item.quantity}
                    <span className={styles.plus} >+</span>
                </div>
            </div>
        </div>
    ))
    
    return (
        <div className={styles.container} style={{display: isCartOpen ? "" : "none"}}>
            <div className={styles.topCartContainer}>
                <h2>Cart ({filteredCart.length})</h2> <h3 onClick={() => handleRemoveAllClick()}>Remove all</h3>
            </div>
            {productMapping}
            <div className={styles.bottomTextContainer}>
                <h3 className={styles.total}>Total</h3>
                <h3 className={styles.totalPrice}>$ {totalPrice().toLocaleString("en-US")}</h3>
            </div>
            <div className={styles.buttonBox}>
                <a>CHECKOUT</a>
            </div>
        </div>
    )
}