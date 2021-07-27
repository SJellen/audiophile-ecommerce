import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import useCartLogic from "./useCartLogic";

export default function useCheckoutLogic() {

    const {cart, setCart, isCheckout, setIsCheckout, isCartOpen, setIsCartOpen} = useContext(Context)
    const {filteredCart, totalPrice} = useCartLogic()

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        paymentChoice: "",
        emoney: '',
        pin: '',
    }

    const [checkoutForm, setCheckoutForm] = useState(initialForm)

    function handleChange(e) {
        const value = e.target.value
        setCheckoutForm({
            ...checkoutForm,
            [e.target.name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(checkoutForm)
        setCheckoutForm(initialForm)
        
        
    }

    return {filteredCart, totalPrice, checkoutForm, setCheckoutForm, handleChange, handleSubmit}
}