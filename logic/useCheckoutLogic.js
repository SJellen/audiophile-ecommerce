import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import useCartLogic from "./useCartLogic";

export default function useCheckoutLogic() {

    const {cart, setCart, isCheckout, setIsCheckout, isCartOpen, setIsCartOpen} = useContext(Context)
    const {filteredCart, totalPrice} = useCartLogic()

    console.log(filteredCart)

    return {filteredCart, totalPrice}
}