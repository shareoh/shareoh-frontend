import "@/styles/globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { ConfigProvider } from 'antd';
export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
      token: {
        colorPrimary: '#15762e',

      },
    }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ConfigProvider>
  );
}
