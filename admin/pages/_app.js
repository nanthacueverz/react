import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThirdwebProvider } from "@thirdweb-dev/react";
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="ethereum">
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThirdwebProvider>
    
  );
}

export default MyApp;
