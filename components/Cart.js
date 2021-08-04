import React, {useContext} from 'react'
import styles from '../styles/Cart.module.scss'
import { Context} from '../context/Context'
import useCartLogic from '../logic/useCartLogic'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {

    const {isCartOpen, filteredCart} = useContext(Context)
    const { handleRemoveAllClick, totalPrice, handleCartItemDecrement, handleCartItemIncrement, handleCartCheckoutClick} = useCartLogic()


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
                <div className={styles.quantityBox}>
                    <span className={styles.minus} onClick={() => handleCartItemDecrement(index, filteredCart)}>-</span>
                        <h4 className={styles.quantity}>{item.quantity}</h4>
                    <span className={styles.plus} onClick={() => handleCartItemIncrement(index, filteredCart)}>+</span>
                </div>
            </div>
        </div>
    ))
    
    return (
        <div className={styles.container} style={{display: isCartOpen ? "" : "none"}}>
            <div className={styles.topCartContainer}>
                <h2>Cart ({filteredCart?.length})</h2> <h3 onClick={() => handleRemoveAllClick()}>Remove all</h3>
            </div>
                <div>{productMapping}</div>
            <div className={styles.bottomTextContainer}>
                <h3 className={styles.total}>Total</h3>
                <h3 className={styles.totalPrice}>$ {totalPrice().toLocaleString("en-US")}</h3>
            </div>
            <div className={styles.buttonBox} >
                <a onClick={() => handleCartCheckoutClick()} 
                style={{display: filteredCart?.length === 0 ? 'none' : ''}}
                 >CHECKOUT</a>
                <a  style={{display: filteredCart?.length === 0 ? '' : 'none'}} >CART EMPTY</a>
            </div>
        </div>
    )
}