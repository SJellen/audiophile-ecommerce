import React, {useContext} from 'react'
import styles from '../styles/OrderComplete.module.scss'
import { Context} from '../context/Context'


export default function OrderComplete() {

    const {isOrderComplete} = useContext(Context)

    return (
        <div style={{display: isOrderComplete ? '' : 'none'}} className={styles.container}>
            order complete
        </div>
    )
}