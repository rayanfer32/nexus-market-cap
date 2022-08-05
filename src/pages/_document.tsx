import { Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <body data-theme="light" className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
