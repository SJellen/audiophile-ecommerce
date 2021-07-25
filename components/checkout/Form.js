import styles from '../../styles/checkout/Form.module.scss'

export default function Form() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>CHECKOUT</h1>
            <form>
                <div className={styles.billingFlexContainer}>
                    <h4>BILLING DETAILS</h4>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Alexei Ward"
                     />
                    <label htmlFor="email">Email Address</label><span>Wrong Format</span>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="alexei@email.com"
                     />
                     <label htmlFor="phone">Phone Number</label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 202-555-0136"
                     />
                </div>
                <div className={styles.shippingFlexContainer}>
                    <h4>SHIPPING INFO</h4>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="1137 Williams Avenue"
                     />
                    <label htmlFor="zip">ZIP code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        pattern="[0-9]{5}"
                        placeholder="10001"
                     />
                     <label htmlFor="city">City</label>
                     <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                     />
                     <label htmlFor="country">Country</label>
                     <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="United States"
                     />
                </div>


            </form>
        </div>
    )
}