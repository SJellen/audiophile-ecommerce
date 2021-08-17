import React, {useContext} from 'react'
import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Context} from '../context/Context'

export default function Header() {
    
    const {handleCartIconClick, isCheckout, orderCompleteOutSideLinkClick} = useContext(Context)

    return (
        <div className={styles.header}>
            <div className={styles.container} style={{backgroundColor: isCheckout ? 'black' : '', width: isCheckout ? '100%' : '', padding: isCheckout ? '0 11%' : ''}}>
            <div className={styles.leftFlexContainer}>
                <div className={styles.hamburger}>
                    <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="open menu icon" width="16" height="16" />
                </div>
                <div className={styles.headerLogo}>
                    <Image src="/assets/shared/desktop/logo.svg" alt="audiophile logo" width="143" height="25"/>
                </div>
            </div>
            <nav className={styles.nav}> 
                <Link href="/" ><a onClick={() => orderCompleteOutSideLinkClick()}>HOME</a></Link>
                <Link href="/headphones" ><a onClick={() => orderCompleteOutSideLinkClick()}>HEADPHONES</a></Link>  
                <Link href="/speakers" ><a onClick={() => orderCompleteOutSideLinkClick()}>SPEAKERS</a></Link>  
                <Link href="/earphones" ><a onClick={() => orderCompleteOutSideLinkClick()}>EARPHONES</a></Link>      
            </nav>
            <div className={styles.rightFlexContainer}>
                <div className={styles.cartLogo}>
                    <Image src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" width="23" height="20" onClick={() => handleCartIconClick()}/>
                </div>
            </div>
        </div>
        </div>
        
    )
}