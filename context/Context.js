import React, {useEffect, useState} from 'react'
import data from '../data/data.json'
import items from '../data/cart.json'
import useLocalStorageState from 'use-local-storage-state'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState(data[5])
    const [productPageQuantity, setProductPageQuantity] = useState(1)
    const [featureLineOne, setFeatureLineOne] = useState()
    const [featureLineTwo, setFeatureLineTwo] = useState()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)

    function handleSeeProductClick(itemNumber) {
        let selection = data[itemNumber]
        setCurrentProduct(selection)
    }

    function handleYouMayLikeClick(name) {
        const product = data.filter(x => x.slug === name).pop()
        setCurrentProduct(product)
    }

    function lineBreakFix() {
        const splitArr = currentProduct.features.split("\n")
        setFeatureLineOne(splitArr[0])
        setFeatureLineTwo(splitArr[2])
    }

    function handleProductPageDecrement() {
        if (productPageQuantity === 1) return
        if (productPageQuantity >= 1) {
            setProductPageQuantity(prevState => prevState - 1)
        }
    }

    function handleProductPageIncrement() {
        if (productPageQuantity >= 1) {
            setProductPageQuantity(prevState => prevState + 1)
        }
    }

    function handleCartIconClick() {
        if (isCartOpen)  setIsCartOpen(false)
        if (!isCartOpen) setIsCartOpen(true)
    }

    useEffect(() => {
        lineBreakFix()
    }, [currentProduct])

    const initialCart = items
    const [cart, setCart] = useLocalStorageState('cart', initialCart)


    function handleAddToCartClick() {
        const productMatch = cart.find(x => x.name === currentProduct.name)
        productMatch.quantity += productPageQuantity
        const updateCart = cart.map(p => {
            if (productMatch.name === p.name) return productMatch
            return p
        })
        setCart(updateCart)
        setProductPageQuantity(1)
    }

    function orderCompleteOutSideLinkClick() {
        setCart(initialCart)
        setIsOrderComplete(false)
        setIsCheckout(false)
    }

    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const dimmerStyle = {filter: isCartOpen === true ? "brightness(.50)" : ""}

    function handleContinueAndPay() {
        setIsOrderComplete(true)
    }

   
    
    
    

        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity, featureLineOne, featureLineTwo, handleYouMayLikeClick, handleProductPageDecrement, handleProductPageIncrement, handleAddToCartClick, handleCartIconClick, isCartOpen, cart, setCart, isCheckout, setIsCheckout, setIsCartOpen, isOrderComplete, setIsOrderComplete, orderCompleteOutSideLinkClick, dimmerStyle, isOrderComplete, handleContinueAndPay}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}