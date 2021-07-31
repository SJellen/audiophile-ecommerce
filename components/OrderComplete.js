import React, {useContext} from 'react'
import styles from '../styles/OrderComplete.module.scss'
import { Context} from '../context/Context'
import Link from 'next/link'

export default function OrderComplete() {

    const {isOrderComplete} = useContext(Context)

    return (
        <div style={{display: isOrderComplete ? '' : 'none'}} className={styles.container}>
            <div className={styles.topContainer}>

            </div>
            <div className={styles.topContainer}>

            </div>
            <div className={styles.buttonBox}>
                <Link href="/" >
                    <a onClick={() => handleHandleCartCheckoutClick()}>BACK TO HOME</a>
                </Link>
            </div>
           
        </div>
    )
}