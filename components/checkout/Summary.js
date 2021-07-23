import styles from '../../styles/checkout/Summary.module.scss'
import useCheckoutLogic from '../../logic/useCheckoutLogic'
import Image from 'next/image'
import Link from 'next/link'

export default function Summary() {

    const {filteredCart, totalPrice} = useCheckoutLogic()
    const vat = ((totalPrice() / 100) * 20).toFixed(0)

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
            <div>SUMMARY</div>
            {productMapping}
            <div>
                <h2>TOTAL $ {totalPrice()}</h2>
                <h2>SHIPPING $ 50</h2>
                <h2>VAT(INCLUDED) $ {vat}</h2>
                <h2>GRAND TOTAL $ {totalPrice() + 50}</h2>
            </div>
            <a>CONTINUE & PAY</a>
        </div>
    )
}