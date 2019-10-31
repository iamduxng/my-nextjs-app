import React from 'react';
import App from 'next/app';
import '../styles/styles.css';
import Layout from '../components/Layout';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout/>
        <Component {...pageProps} />
      </>
    )
  }
}