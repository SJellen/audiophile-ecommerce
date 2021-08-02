import React, {useContext} from 'react'
import { Context } from '../context/Context'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home/Home.module.scss'
import ImageNav from '../components/ImageNav'
import Hero from '../components/home/Hero'
import Midsection from '../components/home/Midsection'

export default function Home() {

  const {isCheckout} = useContext(Context)

  return (
    <div className={styles.container} style={{display: isCheckout ? 'none' : ''}}>
      <Hero />
      <ImageNav />
      <Midsection />
    </div>
  )
}
