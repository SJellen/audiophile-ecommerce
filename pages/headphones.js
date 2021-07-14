import styles from '../styles/Headphones.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'
import SeeProduct from '../components/headphones/SeeProduct'

export default function Headphones() {
    return (
        <div className={styles.container}>
            <CategoryHeader category="HEADPHONES" />
            <SeeProduct />
            <ImageNav />
        </div>
    )
}