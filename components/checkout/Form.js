import styles from '../../styles/checkout/Form.module.scss'
import useCheckoutLogic from '../../logic/useCheckoutLogic'

export default function Form() {

    const {checkoutForm, handleChange, handleSubmit} = useCheckoutLogic()

    console.log(checkoutForm)

    

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>CHECKOUT</h1>
            <form id="checkout" onSubmit={handleSubmit} >
                <div className={styles.billingFlexContainer}>
                    <h4>BILLING DETAILS</h4>
                        <div className={styles.inputBillingFlex}>
                           <label htmlFor="name">Name<br></br>
                            <input
                                onChange={handleChange}
                                value={checkoutForm.name}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Alexei Ward"
                            />
                        </label> 
                        </div>
                        <div className={styles.inputBillingFlex}>
                            <label htmlFor="email">Email Address<br></br>
                            <input
                                onChange={handleChange}
                                value={checkoutForm.email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="alexei@email.com"
                            />
                        </label>
                        </div>
                        <div className={styles.inputBillingFlex}>
                            <label htmlFor="phone">Phone Number<br></br>
                            <input
                                onChange={handleChange}
                                value={checkoutForm.phone}
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="[0-9]{11}"
                                placeholder="+1 202-555-0136"
                            />
                        </label>
                        </div>         
                </div>
                <div className={styles.shippingFlexContainer}>
                    <h4>SHIPPING INFO</h4>
                    <div className={styles.inputShippingAddressFlex}>
                        <label htmlFor="address">Address</label>
                        <input
                            onChange={handleChange}
                            value={checkoutForm.address}
                            type="text"
                            id="address"
                            name="address"
                            placeholder="1137 Williams Avenue"
                        />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="zip">ZIP code</label>
                        <input
                            onChange={handleChange}
                            value={checkoutForm.zip}
                            type="text"
                            id="zip"
                            name="zip"
                            pattern="[0-9]{5}"
                            placeholder="10001"
                        />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="city">City</label>
                     <input
                        onChange={handleChange}
                        value={checkoutForm.city}
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                     />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="country">Country</label>
                     <input
                        onChange={handleChange}
                        value={checkoutForm.country}
                        type="text"
                        id="country"
                        name="country"
                        placeholder="United States"
                     />
                    </div>
                    
                     
                     
                </div>
                <div className={styles.paymentFlexContainer}>
                    <h4>PAYMENT DETAILS</h4>
                    <h5>Payment Method</h5>
                        <div className={styles.paymentSelect}>
                            <input type="radio" className={styles.emoney}></input><label>e-Money</label>
                            <input type="radio" className={styles.cod}></input><label>Cash on Delivery</label>
                        </div>
                        <div className={styles.emoneyContainer}>
                            <label htmlFor="emoney">e-Money Number</label>
                                <input
                                    onChange={handleChange}
                                    value={checkoutForm.emoney}
                                    type="text"
                                    id="emoney"
                                    name="emoney"
                                    pattern="[0-9]{9}"
                                    placeholder="238521993"
                                />
                            <label htmlFor="pin">e-Money PIN</label>
                                <input
                                    onChange={handleChange}
                                    value={checkoutForm.pin}
                                    type="text"
                                    id="pin"
                                    name="pin"
                                    pattern="[0-9]{4}"
                                    placeholder="6891"
                                />    
                        </div>
                        <div className={styles.codContainer}>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>
                </div>
            </form>
        </div>
    )
}