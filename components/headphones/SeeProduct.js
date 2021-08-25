import React, {useContext} from 'react'
import styles from '../../styles/SeeProduct.module.scss'
import Image from 'next/image'
import {Context} from '../../context/Context'
import Link from 'next/link'

export default function SeeProduct() {

    const {handleSeeProductClick} = useContext(Context)

    return (
        <div>
            <div className={styles.itemContainer} >
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-headphones/desktop/image-xx99-mark-two.jpg" alt="headphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-headphones/tablet/image-xx99-mark-two.jpg" alt="headphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-headphones/mobile/image-xx99-mark-two.jpg" alt="headphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>XX99 Mark II<br></br>Headphones</h2>
                        <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <Link href="/productPage">
                            <a onClick={() => handleSeeProductClick(3)}>SEE PRODUCT</a> 
                        </Link>
                    </div> 
                </div>
            </div>
            <div className={styles.evenItemContainer} >
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-headphones/desktop/image-xx99-mark-one.jpg" alt="headphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-headphones/tablet/image-xx99-mark-one.jpg" alt="headphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-headphones/mobile/image-xx99-mark-one.jpg" alt="headphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer} style={{justifyContent: "flex-start"}}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>XX99 Mark I<br></br>Headphones</h2>
                        <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                        <Link href="/productPage">
                            <a onClick={() => handleSeeProductClick(2)}>SEE PRODUCT</a> 
                        </Link>
                    </div> 
                </div>
            </div>
            <div className={styles.itemContainer} >
                <div className={styles.imgContainer}>
                    <Image src="/assets/category-headphones/desktop/image-xx59.jpg" alt="headphones" width="1080" height="1120"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerTablet}>
                    <Image src="/assets/category-headphones/tablet/image-xx59.jpg" alt="headphones" width="1378" height="704"  className={styles.img}/>
                </div>
                <div className={styles.imgContainerMobile}>
                    <Image src="/assets/category-headphones/mobile/image-xx59.jpg" alt="headphones" width="654" height="704"  className={styles.img}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                       <span>NEW PRODUCT</span>
                        <h2>XX59<br></br>Headphones</h2>
                        <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                        <Link href="/productPage">
                            <a onClick={() => handleSeeProductClick(1)}>SEE PRODUCT</a> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}