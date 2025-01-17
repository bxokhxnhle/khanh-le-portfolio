import './globals.css'
import type { Metadata } from 'next'
import mabryPro from 'next/font/local'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import ThemeProvider from './provider'

const mabry = mabryPro({ src: '../public/mabry-regular-pro.ttf'})

export const metadata:Metadata = {
  title: 'Khanh Le',
  description: "Khanh Le's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mabry.className}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <Navbar />
          <Banner />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
