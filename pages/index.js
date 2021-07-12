import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ImageNav from '../components/ImageNav'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <ImageNav />
    </div>
  )
}
