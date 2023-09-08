import "@/styles/globals.css";
import Layout from "../src/components/Layout/Layout";
import { Provider } from "react-redux";
import store from "@/src/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
