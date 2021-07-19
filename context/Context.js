import React, {useEffect, useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState(data[5])
    const [productPageQuantity, setProductPageQuantity] = useState(1)
    const [featureLineOne, setFeatureLineOne] = useState()
    const [featureLineTwo, setFeatureLineTwo] = useState()
    const [isCartOpen, setIsCartOpen] = useState(true)

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

    const [cart, setCart] = useState([
        {
            name: "YX1 Wireless Earphones",
            displayName: "YX1",
            price: 599,
            image: "/assets/cart/image-yx1-earphones.jpg",
            quantity: 0
        },
        {
            name: "XX59 Headphones",
            displayName: "XX59",
            price: 899,
            image: "/assets/cart/image-xx59-headphones.jpg",
            quantity: 0
        },
        {
            name: "XX99 Mark I Headphones",
            displayName: "XX99 MKI",
            price: 1750,
            image: "/assets/cart/image-x99-mark-one-headphones.jpg",
            quantity: 0
        },
        {
            name: "XX99 Mark II Headphones",
            displayName: "XX99 MKII",
            price: 2999,
            image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
            quantity: 0
        },
        {
            name: "ZX7 Speaker",
            displayName: "ZX7",
            price: 3500,
            image: "/assets/cart/image-zx7-speaker.jpg",
            quantity: 0
        },
        {
            name: "ZX9 Speaker",
            displayName: "ZX9",
            price: 4500,
            image: "/assets/cart/image-zx9-speaker.jpg",
            quantity: 0
        }
    ])


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

        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity, featureLineOne, featureLineTwo, handleYouMayLikeClick, handleProductPageDecrement, handleProductPageIncrement, handleAddToCartClick, handleCartIconClick, isCartOpen, cart}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}