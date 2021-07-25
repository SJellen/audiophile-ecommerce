import styles from '../../styles/checkout/Summary.module.scss'
import useCheckoutLogic from '../../logic/useCheckoutLogic'
import Image from 'next/image'
import Link from 'next/link'

export default function Summary() {

    const {filteredCart, totalPrice} = useCheckoutLogic()
    const vat = ((totalPrice() / 100) * 20).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })

    

     const productMapping = filteredCart.map((item, index) => (
        <div key={item[index]} className={styles.itemContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}>
                    <Image src={item.image} alt="product thumbnail" width="150" height="150"  className={styles.img}/>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.name}>{item.displayName}</h4>
                    <h4 className={styles.price}>$ {item.price?.toLocaleString("en-US")}</h4>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.quantityBox}>x{item.quantity}</div>
            </div>
        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}><h3>SUMMARY</h3></div>
            {productMapping}
            <div className={styles.bottomContainer}>
                <h3>TOTAL <span>$ {(totalPrice()).toLocaleString("en-US")}</span></h3>
                <h3>SHIPPING <span>$ 50</span></h3>
                <h3>VAT  (INCLUDED) <span>$ {vat}</span></h3>
                <h3>GRAND TOTAL <span className={styles.grandTotal}>$ {(totalPrice() + 50).toLocaleString("en-US")}</span></h3>
            </div>
            <div className={styles.buttonBox}>
                <a>CONTINUE & PAY</a>
            </div>
        </div>
    )
}