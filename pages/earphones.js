import styles from '../styles/Earphones.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'
import SeeProduct from '../components/earphones/SeeProduct'

export default function Earphones() {
    return (
        <div className={styles.container}>
            <CategoryHeader category="EARPHONES" />
            <SeeProduct />
            <ImageNav />
        </div>
    )
}