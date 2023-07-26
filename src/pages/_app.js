import "@/styles/globals.css";
import Head from "next/head";
import Header from "../components/global/header";
import Footer from "../components/global/footer";
import { ConfigProvider } from 'antd';
export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
      token: {
        colorPrimary: '#15762e',
        fontSize:18,
        fontSizeHeading1:68,
        fontSizeHeading2:48	
      },
    }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ConfigProvider>
  );
}
