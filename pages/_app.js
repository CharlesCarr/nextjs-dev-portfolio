import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout router={router}>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp;
