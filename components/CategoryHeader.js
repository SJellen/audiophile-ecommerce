import React, {useContext} from 'react'
import { Context} from '../context/Context'
import styles from '../styles/CategoryHeader.module.scss'

export default function CategoryHeader(props) {

    const {isCheckout} = useContext(Context)

    return (
        <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}><h1 >{props.category}</h1></div>
    )
}