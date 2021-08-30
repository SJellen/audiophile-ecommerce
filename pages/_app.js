import '../styles/globals.scss'
import Layout from '../components/Layout'
import { ContextProvider } from '../context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
       <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default MyApp
