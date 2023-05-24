import Document, { Html, Main, NextScript } from "next/document";
import Head from "next/head";

export default class document extends Document() {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
