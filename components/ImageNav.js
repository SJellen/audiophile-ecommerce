import React, {useContext} from 'react'
import styles from '../styles/ImageNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Context} from '../context/Context'

export default function ImageNav() {

    const {handleImageNavLinkClick} = useContext(Context)

    return (
        <div className={styles.container}>
            <div className={styles.selectionBox}>
                <div className={styles.grayBacking}></div>
                <div className={styles.foregroundFlexContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/assets/shared/desktop/image-headphones.png" alt="headphones" width="200" height="200"  className={styles.img}/>
                </div>
                <h3>HEADPHONES</h3>
                <Link href="/headphones" passHref>
                    <h4 onClick={handleImageNavLinkClick}>SHOP <span>
                        <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow" width="5" height="10"  className={styles.svg}/>
                    </span></h4>
                </Link>
                
                </div>
            </div>
            <div className={styles.selectionBox}>
                <div className={styles.grayBacking}></div>
                <div className={styles.foregroundFlexContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/assets/shared/desktop/image-speakers.png" alt="speakers" width="200" height="200"  className={styles.img}/>
                </div>
                <h3>SPEAKERS</h3>
                    <Link href="/speakers" passHref>
                        <h4 onClick={handleImageNavLinkClick} >SHOP <span>
                            <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow" width="5" height="10"  className={styles.svg}/>
                        </span></h4>
                    </Link>
                
                </div>
                
            </div>
            <div className={styles.selectionBox}>
                <div className={styles.grayBacking}></div>
                <div className={styles.foregroundFlexContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/assets/shared/desktop/image-earphones.png" alt="earphones" width="225" height="200"  className={styles.img}/>
                </div>
                <h3>EARPHONES</h3>
                    <Link href="/earphones" passHref>
                        <h4 onClick={handleImageNavLinkClick}>SHOP <span >
                        <Image src="/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow" width="5" height="10"  className={styles.svg}/>
                        </span></h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}