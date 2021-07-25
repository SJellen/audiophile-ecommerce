import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import useCartLogic from "./useCartLogic";

export default function useCheckoutLogic() {

    const {cart, setCart, isCheckout, setIsCheckout, isCartOpen, setIsCartOpen} = useContext(Context)
    const {filteredCart, totalPrice} = useCartLogic()

    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        isEmoney: false,
        emoney: '',
        pin: '',
        cod: false
    })

    function handleChange(e) {
        const value = e.target.value
        setCheckoutForm({
            ...checkoutForm,
            [e.target.name]: value
        })
    }

    return {filteredCart, totalPrice, checkoutForm, setCheckoutForm, handleChange}
}