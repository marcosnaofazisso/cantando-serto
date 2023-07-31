import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cantando Serto',
  description: 'Aprenda a cantar suas músicas favoritas de forma serta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
