import styles from '../styles/Earphones.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'

export default function Earphones() {
    return (
        <div className={styles.container}>
            <CategoryHeader category="EARPHONES" />
            <ImageNav />
        </div>
    )
}