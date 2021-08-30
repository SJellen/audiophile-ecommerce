import React, {useContext} from 'react'
import styles from '../../styles/checkout/Checkout.module.scss'
import Form from '../checkout/Form'
import Summary from '../checkout/Summary'
import OrderComplete from '../OrderComplete'
import { Context } from '../../context/Context'
import { useRouter } from 'next/router'

export default function Checkout() {

    const {isCheckout, isOrderComplete, handleBackClick, backUrl} = useContext(Context)

    const router = useRouter()

    return (
        <div className={styles.container} style={{ backgroundColor: isOrderComplete ? "gray" : '', display: isCheckout ? "" : 'none'}}>
            <div className={styles.header}></div>
                <div className={styles.goBack}><h4 onClick={() => router.push(backUrl), handleBackClick }>Go Back</h4></div>
                <div className={styles.flexContainer}>
                    <Form />
                    <Summary />
                    <OrderComplete /> 
                </div>
        </div>
    )
}