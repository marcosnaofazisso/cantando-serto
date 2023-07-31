import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Cantando Serto',
  description: 'Aprenda a cantar suas músicas favoritas de forma serta',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
      </Head>
      <Script id="google-analytics" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GA_TRACKING_ID}`} />
      <Script id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
