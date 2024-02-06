import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto',
})

export const metadata: Metadata = {
  title: 'Escreveae',
  description:
    'Um Blog de escrita criativa para você encontrar tudo o que sua imaginação permitir',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.variable + ' overflow-x-hidden'}>{children}</body>
    </html>
  )
}
