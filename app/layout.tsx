import Nav from "@/components/Nav"
import Header from "@/components/header"
import Loader from "@/components/loader"
import "@/styles/index.scss"
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000)
  }, [])

  return (
    <html lang="fr">
      <body className={inter.className}>
        {loading ? (
          <>
            <Header />
            <Nav />
            {children}
          </>
        ) : <Loader />}
      </body>
    </html>
  )
}
