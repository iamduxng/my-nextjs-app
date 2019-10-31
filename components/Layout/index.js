import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <Head>
      <title>Next.js App</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="" />

      {/* CODELAB: Add iOS meta tags and icons */}
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <meta name="apple-mobile-web-app-title" content="Huong's website"/>
      
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo192.png" />
    </Head>
  );
}

export default Layout;