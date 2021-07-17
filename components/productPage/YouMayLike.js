import styles from '../../styles/productPage/YouMayLike.module.scss'
import React, {useContext} from 'react'
import { Context } from '../../context/Context'
import Image from 'next/image'
import Link from 'next/link'

export default function YouMayLike() {

    const {currentProduct, handleYouMayLikeClick} = useContext(Context)

    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>YOU MAY ALSO LIKE</h1>
            <div className={styles.productFlexContainer}>
                <div className={styles.productBox}>
                    <div className={styles.grayBacking}>
                        <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.others[0].image.desktop}`} alt="you may also like image one" width="700" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.others[0].image.tablet}`} alt="you may also like image one" width="446" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.others[0].image.mobile}`} alt="you may also like image one" width="654" height="240"  className={styles.img}/>
                    </div>
                    </div>
                    <h2 className={styles.productName}>{currentProduct.others[0].name}</h2>
                        <Link href="/productPage">
                        <a onClick={() => handleYouMayLikeClick(currentProduct.others[0].slug)}>SEE PRODUCT</a> 
                    </Link>
                </div>
                <div className={styles.productBox}>
                    <div className={styles.grayBacking}>
                        <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.others[1].image.desktop}`} alt="you may also like image two" width="700" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.others[1].image.tablet}`} alt="you may also like image two" width="446" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.others[1].image.mobile}`} alt="you may also like image two" width="654" height="240"  className={styles.img}/>
                    </div>
                    </div>
                        <h2 className={styles.productName}>{currentProduct.others[1].name}</h2>
                        <Link href="/productPage">
                            <a onClick={() => handleYouMayLikeClick(currentProduct.others[1].slug)}>SEE PRODUCT</a> 
                       </Link>  
                </div>
                <div className={styles.productBox}>
                <div className={styles.grayBacking}>
                    <div className={styles.imgContainer}>
                        <Image src={`${currentProduct.others[2].image.desktop}`} alt="you may also like image three" width="700" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerTablet}>
                        <Image src={`${currentProduct.others[2].image.tablet}`} alt="you may also like image three" width="446" height="636"  className={styles.img}/>
                    </div>
                    <div className={styles.imgContainerMobile}>
                        <Image src={`${currentProduct.others[2].image.mobile}`} alt="you may also like image three" width="654" height="240"  className={styles.img}/>
                    </div>
                </div>
                    <h2 className={styles.productName}>{currentProduct.others[2].name}</h2>
                    <Link href="/productPage">
                        <a onClick={() => handleYouMayLikeClick(currentProduct.others[2].slug)}>SEE PRODUCT</a> 
                    </Link>
                </div>
            </div>  
        </div>
    )
}