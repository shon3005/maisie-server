import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static getInitialProps ({ renderPage, ctx }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks, ctx }
  }
  render () {
    return (
      <html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
