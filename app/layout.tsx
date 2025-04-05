import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GENCORE IT - Next Generation Core IT Solutions",
  description:
    "GENCORE IT provides cutting-edge IT solutions including web development, cloud solutions, PBX & VoIP, SEO & digital marketing, and IT support & consultancy.",
  keywords:
    "IT solutions, web development, cloud solutions, PBX, VoIP, SEO, digital marketing, IT support, consultancy, CRM development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'