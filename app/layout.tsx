import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Journey Through Hogwarts",
  description: "Explore the magical world of Hogwarts School of Witchcraft and Wizardry",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen`}>
        <Navigation />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
