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

    const {isOrderComplete} = useContext(Context)
    const {filteredCart, totalPrice} = useCheckoutLogic()
    const {handleOrderCompleteGoHomeClick} = useCartLogic()

    return (
        <div style={{display: isOrderComplete ? '' : 'none'}} className={styles.container}>
            <div className={styles.topContainer}>
                <Image src="/assets/shared/desktop/check-mark.svg" alt="check mark icon" width="64" height="64"  className={styles.svg}/>
                <h1>THANK YOU<br></br> FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.leftContainer}>
                    <OrderCompleteItems />
                    <OrderCompleteSingleItems />
                    <div className={styles.toggleContainer}>
                        <h4>View less</h4>
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