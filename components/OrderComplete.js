import React, {useContext} from 'react'
import styles from '../styles/OrderComplete.module.scss'
import { Context} from '../context/Context'
import Link from 'next/link'
import Image from 'next/image'
import useCheckoutLogic from '../logic/useCheckoutLogic'
import useCartLogic from '../logic/useCartLogic'
import OrderCompleteItems from './OderCompleteItems'
import OrderCompleteSingleItems from './OrderCompleteSingleItem'

export default function OrderComplete() {

    const {isOrderComplete, filteredCart} = useContext(Context)
    const {totalPrice, handleOrderCompleteToggle, showFullList} = useCheckoutLogic()
    const {handleOrderCompleteGoHomeClick} = useCartLogic()

    console.log(showFullList)

    return (
        <div style={{display: isOrderComplete ? '' : 'none'}} className={styles.container}>
            <div className={styles.topContainer}>
                <Image src="/assets/shared/desktop/check-mark.svg" alt="check mark icon" width="64" height="64"  className={styles.svg}/>
                <h1>THANK YOU<br></br> FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.leftContainer}>
                    <div style={{display: showFullList ? '' : 'none'}}>
                        <OrderCompleteItems />
                    </div>
                    <div style={{display: showFullList ? 'none' : ''}}>
                        <OrderCompleteSingleItems />
                    </div> 
                    <div className={styles.toggleContainer} style={{display: filteredCart && filteredCart?.length - 1 === 0 ? 'none' : ''}}>
                        <h4 onClick={() => handleOrderCompleteToggle()} style={{display: showFullList ? '' : 'none'}}>View less</h4>
                        <h4 onClick={() => handleOrderCompleteToggle()} style={{display: showFullList ? 'none' : ''}}>and {filteredCart && filteredCart?.length - 1} other item(s)</h4>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.totalContainer}>
                        <p>GRAND TOTAL</p>
                        <h3>$ {(totalPrice() + 50).toLocaleString("en-US")}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.buttonBox}>
                <Link href="/" >
                    <a onClick={() => handleOrderCompleteGoHomeClick()}>BACK TO HOME</a>
                </Link>
            </div>
        </div>
    )
}