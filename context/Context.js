import React, {useEffect, useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState(data[5])
    const [productPageQuantity, setProductPageQuantity] = useState(1)

    function handleSeeProductClick(itemNumber) {
        let selection = data[itemNumber]
        setCurrentProduct(selection)
    }
        
    return (
        <Context.Provider value={{handleSeeProductClick, currentProduct, productPageQuantity}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}