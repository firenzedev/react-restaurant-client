import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";
import Notifications from "../components/Notification/Notifications";

export default function Home() {
  return (
    <>
      <Head>
        <title>GraphQL demo | firenze.dev</title>
        <meta
          name="description"
          content="A sample application made with React and GraphQL by firenze.dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Notifications />
      <Homepage />
    </>
  );
}
