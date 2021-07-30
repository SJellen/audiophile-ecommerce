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
                           <label htmlFor="name" className="name">Name<span id="nameLabel">Enter A Name</span></label> 
                           <input onChange={handleChange} value={checkoutForm.name} type="text" id="name" name="name" placeholder="Alexei Ward" />
                        </div>
                        <div className={styles.inputBillingFlex}>
                            <label htmlFor="email" className="email">Email Address<span id="emailLabel">Wrong Format</span></label>
                            <input onChange={handleChange} value={checkoutForm.email} type="text" id="email" name="email" placeholder="alexei@email.com" />
                        </div>
                        <div className={styles.inputBillingFlex}>
                            <label htmlFor="phone" className="phone">Phone Number<span id="phoneLabel">Must Be 11 Digits</span></label>
                            <input onChange={handleChange} value={checkoutForm.phone} type="text" id="phone" name="phone" placeholder="+1 202-555-0136" />
                        </div>         
                </div>
                <div className={styles.shippingFlexContainer}>
                    <h4>SHIPPING INFO</h4>
                    <div className={styles.inputShippingAddressFlex}>
                        <label htmlFor="address" className="address">Address<span id="addressLabel">Enter An Address</span></label>
                        <input onChange={handleChange} value={checkoutForm.address} type="text" id="address" name="address" placeholder="1137 Williams Avenue" />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="zip" className="zip">ZIP code<span id="zipLabel">Must Be 5 Digits</span></label>
                        <input onChange={handleChange} value={checkoutForm.zip} type="text" id="zip" name="zip" placeholder="10001" />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="city" className="city">City<span id="cityLabel">Enter A City Name</span></label>
                     <input onChange={handleChange} value={checkoutForm.city} type="text" id="city" name="city" placeholder="New York" />
                    </div>
                    <div className={styles.inputShippingFlex}>
                        <label htmlFor="country" className="country">Country<span id="countryLabel">Enter A Country</span></label>
                     <input onChange={handleChange} value={checkoutForm.country} type="text" id="country" name="country" placeholder="United States" />
                    </div>   
                </div>
                <div className={styles.paymentFlexContainer}>
                    <h4>PAYMENT DETAILS</h4>
                    <h5>Payment Method</h5>
                        <div className={styles.paymentSelect}>
                            <div className={styles.methodContainer}>
                                <input onChange={handleChange} type="radio" className={styles.emoney} id="isEmoney" value="emoney" name="paymentChoice" />
                                <label htmlFor="paymentChoice1" >e-Money</label>
                            </div>
                            <div className={styles.methodContainer}>
                                <input onChange={handleChange} type="radio" className={styles.cod} id="cod" value="cod" name="paymentChoice" />
                                <label htmlFor="paymentChoice2">Cash on Delivery</label>
                            </div> 
                        </div>
                        <div className={styles.emoneyContainer} style={{display: checkoutForm.paymentChoice === "emoney" ? "flex": "none"}}>
                            <div className={styles.emoneyNumberContainer}>
                                <label htmlFor="emoney" className="emoney">e-Money Number<span id="emoneyLabel">Must Be 9 Digits</span></label>
                                <input onChange={handleChange} value={checkoutForm.emoney} type="text" id="emoney" name="emoney" placeholder="238521993" />
                            </div>
                            <div className={styles.emoneyNumberContainer}>
                                <label htmlFor="pin" className="pin">e-Money PIN<span id="pinLabel">Must Be 4 Digits</span></label>
                                <input onChange={handleChange} value={checkoutForm.pin} type="text" id="pin" name="pin"  placeholder="6891" /> 
                            </div>    
                        </div>
                        <div className={styles.codContainer} style={{display: checkoutForm.paymentChoice === "cod" ? "flex": "none"}}>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>
                </div>
            </form>
        </div>
    )
}