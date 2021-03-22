import '../styles/globals.css';
import '../styles/carousel.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
