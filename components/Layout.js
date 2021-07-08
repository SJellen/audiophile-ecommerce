import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'


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
            <main >
              {children}
            </main>
            <Footer />
        </div>
      )
    }