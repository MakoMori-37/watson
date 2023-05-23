import '@/styles/globals.css'
import Head from "next/head";
const HOST = process.env.HOST;

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Watson</title>
        <link rel="icon" href={`${HOST}/image/logo_icon.ico`} />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}