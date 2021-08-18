import React from 'react';
import Head from 'next/head';
import App from '../components/App';

const Home = () => (
  <>
    <Head>
      <title>Resume</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <App />
  </>
);

export default Home;
