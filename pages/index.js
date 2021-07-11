import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ImageNav from '../components/ImageNav'

export default function Home() {
  return (
    <div className={styles.container}>
      <ImageNav />
    </div>
  )
}
