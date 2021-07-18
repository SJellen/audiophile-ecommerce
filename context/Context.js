import React, {useEffect, useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState(data[5])
    const [productPageQuantity, setProductPageQuantity] = useState(1)
    const [featureLineOne, setFeatureLineOne] = useState()
    const [featureLineTwo, setFeatureLineTwo] = useState()

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

    useEffect(() => {
        lineBreakFix()
    }, [currentProduct])

    
        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity, featureLineOne, featureLineTwo, handleYouMayLikeClick, handleProductPageDecrement, handleProductPageIncrement}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}