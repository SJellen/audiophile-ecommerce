import React, {useContext} from 'react'
import styles from '../../styles/checkout/Summary.module.scss'
import useCheckoutLogic from '../../logic/useCheckoutLogic'
import { Context } from '../../context/Context'
import OrderCompleteItems from '../OderCompleteItems'

export default function Summary() {

    const {handleContinueAndPay, isOrderComplete, isCheckout} = useContext(Context)
    const {filteredCart, totalPrice} = useCheckoutLogic()
    const vat = ((totalPrice() / 100) * 20).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })

    return (
        <div className={styles.container} style={{display: isCheckout ? '' : 'none', filter: isOrderComplete ? "brightness(.55)" : ""}}>
            <div className={styles.topContainer}><h3>SUMMARY</h3></div>
                <div><OrderCompleteItems /></div>
            <div className={styles.bottomContainer}>
                <h3>TOTAL <span>$ {(totalPrice()).toLocaleString("en-US")}</span></h3>
                <h3>SHIPPING <span>$ 50</span></h3>
                <h3>VAT  (INCLUDED) <span>$ {vat}</span></h3>
                <h3>GRAND TOTAL <span className={styles.grandTotal}>$ {(totalPrice() + 50).toLocaleString("en-US")}</span></h3>
            </div>
            <div className={styles.buttonBox}>
                <button form="checkout" type="submit" onClick={() => handleContinueAndPay()}>CONTINUE & PAY</button>
            </div>
        </div>
    )
}