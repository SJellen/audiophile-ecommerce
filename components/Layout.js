import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BestGear from './BestGear'
import Cart from './Cart'
import Checkout from './checkout/Checkout'


export default function Layout({children}) {
  
      return (
        <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}} >
          <Head>
            <title>Audiophile</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Description" content="Audiophile" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          </Head>
            <Header/>
            <Cart />
            <main >
              {children}
            </main>
            <Checkout />
            <BestGear />
            <Footer />
        </div>
      )
    }