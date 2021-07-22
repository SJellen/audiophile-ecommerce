import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home/Home.module.scss'
import ImageNav from '../components/ImageNav'
import Hero from '../components/home/Hero'
import Midsection from '../components/home/Midsection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <ImageNav />
      <Midsection />
    </div>
  )
}
