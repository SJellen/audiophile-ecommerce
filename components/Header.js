import styles from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    

    return (
        <div className={styles.container} >
            <div className={styles.leftFlexContainer}>
                <div className={styles.hamburger}>
                    <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="coffee roasters logo" width="16" height="16" />
                </div>
                <div className={styles.headerLogo}>
                    <Image src="/assets/shared/desktop/logo.svg" alt="coffee roasters logo" width="143" height="25"/>
                </div>
            </div>
            <nav className={styles.nav}>   
                <a>HOME</a>
                <a>HEADPHONES</a>
                <a>SPEAKERS</a>
                <a>EARPHONES</a>
            </nav>
            <div className={styles.rightFlexContainer}>
                <div className={styles.cartLogo}>
                    <Image src="/assets/shared/desktop/icon-cart.svg" alt="coffee roasters logo" width="23" height="20"/>
                </div>
            </div>
        </div>
    )
}