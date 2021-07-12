import styles from '../styles/CategoryHeader.module.scss'

export default function CategoryHeader(props) {

    return (
        <div className={styles.container}><h1>{props.category}</h1></div>
    )
}