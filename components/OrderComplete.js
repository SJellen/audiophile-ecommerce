import React, {useContext} from 'react'
import styles from '../styles/OrderComplete.module.scss'
import { Context} from '../context/Context'


export default function OrderComplete() {

    const {isCartOpen} = useContext(Context)

    return (
        <div>
            order complete
        </div>
    )
}