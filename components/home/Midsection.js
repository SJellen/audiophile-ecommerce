import styles from '../../styles/home/Midsection.module.scss'
import MidsectionTop from "./MidsectionTop"
import MidsectionMid from './MidsectionMid'
import MidsectionBottom from './MidsectionBottom'

export default function Midsection() {
    return (
        <div className={styles.container}>
            <MidsectionTop />
            <MidsectionMid />
            <MidsectionBottom />
        </div>
    )
}