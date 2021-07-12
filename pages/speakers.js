import styles from '../styles/Speakers.module.scss'
import ImageNav from '../components/ImageNav'
import CategoryHeader from '../components/CategoryHeader'

export default function Speakers() {
    return (
        <div className={styles.container}>
            <CategoryHeader category="SPEAKERS" />
            <ImageNav />
        </div>
    )
}