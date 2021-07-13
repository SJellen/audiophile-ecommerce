import styles from '../../styles/home/Midsection.module.scss'
import MidsectionTop from "./MidsectionTop"

export default function Midsection() {
    return (
        <div className={styles.container}>
            <MidsectionTop />
        </div>
    )
}