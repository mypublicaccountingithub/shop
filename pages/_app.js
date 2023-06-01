import "../styles/globals.scss";
import Providers from "../components/providers";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
