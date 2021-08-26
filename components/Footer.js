import React, {useContext} from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Context} from '../context/Context'

export default function Footer() {
    /* eslint-disable react/no-unescaped-entities */
    const {orderCompleteOutSideLinkClick} = useContext(Context)

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <div className={styles.topLineContainer}>
                <div className={styles.topLine}></div>
            </div>
            
            <div className={styles.logoNavFlexContainer}>
                <div className={styles.logo}>
                    <Image src="/assets/shared/desktop/logo.svg" alt="audiophile logo" width="143" height="25"/>
                </div>
                <nav className={styles.nav}>   
                    <Link href="/"><a onClick={() => orderCompleteOutSideLinkClick()}>HOME</a></Link>
                    <Link href="/headphones"><a onClick={() => orderCompleteOutSideLinkClick()}>HEADPHONES</a></Link>  
                    <Link href="/speakers"><a onClick={() => orderCompleteOutSideLinkClick()}>SPEAKERS</a></Link>  
                    <Link href="/earphones"><a onClick={() => orderCompleteOutSideLinkClick()}>EARPHONES</a></Link>  
                </nav>
            </div>
            <div className={styles.description}>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className={styles.iconFlexContainer}>
               <div className={styles.iconContainer}>
                <Image src="/assets/shared/desktop/icon-facebook.svg" alt="facebook icon" width="24" height="24"  className={styles.svg}/>
                <Image src="/assets/shared/desktop/icon-twitter.svg" alt="twitter icon" width="24" height="24"  className={styles.svg}/>
                <Image src="/assets/shared/desktop/icon-instagram.svg" alt="instagram icon" width="24" height="24"  className={styles.svg}/>
            </div> 
            </div>
            
            <p className={styles.copyright} >Copyright 2021. All Rights Reserved</p>
        </div>
        </footer>
        
    )
}