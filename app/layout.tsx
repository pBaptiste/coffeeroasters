import type { Metadata } from 'next'
import { Barlow, Fraunces } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const barlow = Barlow({ subsets: ['latin'], weight: ["400", "500", "700"], variable: "--font-barlow" })
const fraunces = Fraunces({ subsets: ['latin'], weight: ["900"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: 'Coffeeroasters',
  description: 'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${barlow.variable} ${fraunces.variable} relavite flex flex-col items-center bg-lightCream`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
