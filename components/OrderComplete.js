import React, {useContext} from 'react'
import styles from '../styles/OrderComplete.module.scss'
import { Context} from '../context/Context'
import Link from 'next/link'
import Image from 'next/image'

export default function OrderComplete() {

    const {isOrderComplete} = useContext(Context)

    return (
        <div style={{display: isOrderComplete ? '' : 'none'}} className={styles.container}>
            <div className={styles.topContainer}>
                <Image src="/assets/shared/desktop/check-mark.svg" alt="check mark icon" width="64" height="64"  className={styles.svg}/>
                <h1>THANK YOU FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>

            </div>
            <div className={styles.middleContainer}>
                <div className={styles.leftContainer}>
                    
                </div>
                <div className={styles.rightContainer}>

                </div>

            </div>
            <div className={styles.buttonBox}>
                <Link href="/" >
                    <a onClick={() => handleHandleCartCheckoutClick()}>BACK TO HOME</a>
                </Link>
            </div>
           
        </div>
    )
}