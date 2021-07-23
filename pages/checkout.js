import styles from '../styles/checkout/Checkout.module.scss'
import Form from '../components/checkout/Form'
import Summary from '../components/checkout/Summary'

export default function Checkout() {

    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
                <div className={styles.goBack}><h4>Go Back</h4></div>
                <div className={styles.flexContainer}>
                    <Form />
                    <Summary />
                </div>
        </div>
    )
}