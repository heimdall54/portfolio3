"use client"

import Nav from "@/components/Nav"
import Header from "@/components/header"
import Loader from "@/components/loader"
import "@/styles/index.scss"
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [loading, setLoading] = React.useState(true)

  // React.useEffect(() => {
  //   setTimeout(() => setLoading(true), 3000)
  // }, [])

  return (
    <html lang="fr">
      <body >
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
