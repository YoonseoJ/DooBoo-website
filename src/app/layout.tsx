import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Roboto_Condensed } from 'next/font/google'

const roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DooBoo Restaurant',
  description: `Welcome to DooBoo, authentic Korean cuisine. Our restaurant offers vibrant flavors of Korea. Join us at DooBoo for a culinary journey through the rich and diverse tapestry of Korean flavors.`,
  keywords: 'burnaby, korean, korea, restaurant, tofu, dooboo, edmonds korean, metrotown korean, burnaby korean, vancouver korean, 순두부, 두부, 한식당, 버나비 한국',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className && ''}>
      <body className=' top-0'>
        <Header/>
        <main className='grow flex flex-col mx-auto'>{children}</main>
        <Footer/>
        <div id='portal'/>
      </body>
    </html>
  )
}
