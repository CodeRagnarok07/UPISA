import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const debug = process.env.NEXT_PUBLIC_DEV

  const loadi18n = `{% load i18n %}
  {% get_current_language as LANGUAGE_CODE %}
  {% get_language_info for LANGUAGE_CODE as lang %}`

  
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {!debug && loadi18n }
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
