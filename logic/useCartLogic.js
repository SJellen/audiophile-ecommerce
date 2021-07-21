import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";


export default function useCartLogic() {

    const {cart, setCart} = useContext(Context)

    const filteredCart = cart.filter(x => x.quantity !== 0)

    function handleRemoveAllClick() {
        setCart([
    {
        "name": "YX1 Wireless Earphones",
       " displayName": "YX1",
        "price": 599,
        "image": "/assets/cart/image-yx1-earphones.jpg",
        "quantity": 0
    },
    {
        "name": "XX59 Headphones",
        "displayName": "XX59",
        "price": 899,
        "image": "/assets/cart/image-xx59-headphones.jpg",
        "quantity": 0
    },
    {
        "name": "XX99 Mark I Headphones",
        "displayName": "XX99 MKI",
        "price": 1750,
        "image": "/assets/cart/image-x99-mark-one-headphones.jpg",
        "quantity": 0
    },
    {
        "name": "XX99 Mark II Headphones",
        "displayName": "XX99 MKII",
        "price": 2999,
        "image": "/assets/cart/image-xx99-mark-two-headphones.jpg",
        "quantity": 0
    },
    {
        "name": "ZX7 Speaker",
        "displayName": "ZX7",
        "price": 3500,
        "image": "/assets/cart/image-zx7-speaker.jpg",
        "quantity": 0
    },
    {
        "name": "ZX9 Speaker",
        "displayName": "ZX9",
        "price": 4500,
        "image": "/assets/cart/image-zx9-speaker.jpg",
        "quantity": 0
    }
])
    }

    function totalPrice() {
        let total = 0
        filteredCart.forEach(item => {
        
        total += item.price * item.quantity
        
        })
        return total
    }

    function handleCartItemDecrement(e, arr) {
        console.log(arr[e])
    }

    function handleCartItemIncrement(e, arr) {
        console.log(arr[e])
    }

    

   
    
    

    return {filteredCart, handleRemoveAllClick, totalPrice, handleCartItemDecrement, handleCartItemIncrement}
}