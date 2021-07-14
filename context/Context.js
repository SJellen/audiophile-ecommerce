import React, {useEffect, useState} from 'react'
import data from '../data/data.json'

const Context = React.createContext() 

function ContextProvider({ children }) {

    const [currentProduct, setCurrentProduct] = useState()

    

    function handleSeeProductClick(itemNumber) {
        setCurrentProduct(data[itemNumber])
    }
        
    console.log(data, currentProduct)

    return (
        <Context.Provider value={{handleSeeProductClick}}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider}