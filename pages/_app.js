import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import apolloClient from "../graphql/apolloClient";
import Header from "../components/Layout/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
