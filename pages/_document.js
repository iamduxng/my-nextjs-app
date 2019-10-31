import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head/>
        <body>
          <noscript>Enable javascript to run this web app.</noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}