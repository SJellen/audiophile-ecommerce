import React, {useContext} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BestGear from './BestGear'
import Cart from './Cart'
import Checkout from './checkout/Checkout'
import { Context } from '../context/Context'


export default function Layout({children}) {

  const {isCheckout, isCartOpen} = useContext(Context)
  
      return (
        <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden", backgroundColor: isCheckout || isCartOpen ? "gray" : ''}} >
          <Head>
            <title>Audiophile</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Description" content="Audiophile" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          </Head>
            <Header/>
            <Cart />
            <main style={{filter: isCheckout || isCartOpen ? "brightness(.55)" : " ", backgroundColor: isCheckout || isCartOpen ? "silver" : ''}}>
              {children}
            </main>
            <Checkout />
            <BestGear />
            <Footer />
        </div>
      )
    }