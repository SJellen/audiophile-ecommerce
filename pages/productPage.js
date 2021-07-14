import React, {useContext} from 'react'
import Image from 'next/image'
import {Context} from  '../context/Context'

export default function ProductPage() {

    const {currentProduct} = useContext(Context)

    return (
        <div className={styles.container}>

        </div>
    )
}


