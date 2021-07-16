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

    function lineBreakFix() {
        const splitArr = currentProduct.features.split("\n")
        setFeatureLineOne(splitArr[0])
        setFeatureLineTwo(splitArr[2])
    }

    useEffect(() => {
        lineBreakFix()
    }, [currentProduct])

    
        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity, featureLineOne, featureLineTwo}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}