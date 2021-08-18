import React, {useEffect, useState} from 'react'
import data from '../data/data.json'
import items from '../data/cart.json'
import useLocalStorageState from 'use-local-storage-state'
import Router from 'next/router'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState(data[5])
    const [productPageQuantity, setProductPageQuantity] = useState(1)
    const [featureLineOne, setFeatureLineOne] = useState()
    const [featureLineTwo, setFeatureLineTwo] = useState()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)
    const [backUrl, setBackUrl] = useState()

    

    function handleSeeProductClick(itemNumber) {
        let selection = data[itemNumber]
        setBackUrl(selection.category)
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

    const [filteredCart, setFilteredCart] = useState()

    useEffect(() => {
        let filtered = cart.filter(x => x.quantity !== 0)
        setFilteredCart(filtered)
    }, [cart])


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
        if (isCheckout) {
          setCart(initialCart)
          setIsOrderComplete(false)
          setIsCheckout(false)  
        }
        if (isCartOpen) {
            setIsCartOpen(false)
        }
    }

    const [isOrderComplete, setIsOrderComplete] = useState(false)

    function handleContinueAndPay() {
        setIsOrderComplete(true)
    }

    function handleBackClick() {
        Router.push(backUrl)
        setIsCheckout(false)
    }

    const [navOpen, setNavOpen] = useState(false)

    function handleHamburgerClick() {
        if (navOpen) {
            setNavOpen(false)
        } else {
            setNavOpen(true)
        }
    }




    // console.log(currentProduct.category)
    
    

        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity, featureLineOne, featureLineTwo, handleYouMayLikeClick, handleProductPageDecrement, handleProductPageIncrement, handleAddToCartClick, handleCartIconClick, isCartOpen, cart, setCart, isCheckout, setIsCheckout, setIsCartOpen, isOrderComplete, setIsOrderComplete, orderCompleteOutSideLinkClick, isOrderComplete, handleContinueAndPay, filteredCart, backUrl, setBackUrl, handleBackClick, handleHamburgerClick, navOpen}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}